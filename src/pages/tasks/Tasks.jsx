import headerimg from "../../assets/img/img-tasks.webp"
import "./Tasks.css"

export const Tasks = () => {
  return (
    <main>
      <div className="header-img">
        <img className="spin-img" src={headerimg} alt="image animada de react js" loading="lazy" decoding="async" width={150} />
      </div>
      <div className="container-title-tasks">
        <h2>Añade tus tareas</h2>
      </div>
      <div className="content-tasks">
        <form action="" className="form-tasks">
          <label htmlFor="text" className="label-tasks">Add Tasks</label>
          <input type="text" placeholder="Add tarea"className="input-tasks"/>
          <button>Add</button>
        </form>
      </div>
    </main>
  )
}

