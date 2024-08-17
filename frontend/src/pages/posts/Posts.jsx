import { useState, useEffect } from "react";
import axios from "axios";
import "./Posts.css";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/posts");
      const posts = Array.isArray(response.data) ? response.data : [response.data];
      setPosts(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) formData.append("image", image); // Solo agregar imagen si existe

    try {
      if (editingPost) {
        await axios.put(`http://localhost:3001/posts/${editingPost.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setEditingPost(null);
      } else {
        await axios.post("http://localhost:3001/create", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
      setTitle("");
      setDescription("");
      setImage(null);
      fetchPosts();
    } catch (error) {
      console.error(
        "Error creating or updating post:",
        error.response?.data || error.message
      );
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setTitle(post.title);
    setDescription(post.description);
    setImage(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/posts/${id}`);  
      fetchPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <main className="posts-contenedor">
      <h2 className="title-posts">Posts</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required={!editingPost}
        />
        <button type="submit">
          {editingPost ? "Update Post" : "Create Post"}
        </button>
      </form>

      <div className="posts-list">
      {posts
    .filter((post) => post !== null && post !== undefined)
    .map((post) => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        {post.image_url && <img src={post.image_url} alt={post.title} />}
        <button onClick={() => handleEdit(post)}>Edit</button>
        <button onClick={() => handleDelete(post.id)}>Delete</button>
      </div>
    ))}
      </div>
    </main>
  );
};
