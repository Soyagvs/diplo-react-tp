import BgVideo from "../../assets/video/video.webm"
import "./Home.css"

const Home = () => {
  return (
    <main>
      <div className="home-container">
        <h1 className="home-h1">Dale vida a tus emprendimientos desde la web</h1>
        <p className="home-p">
          Comunicate con nosotros y pon en meta tus proyectos personales o dale mas conocimiento a tu empresa familiar.
        </p>
        <div className="home-buttons">
          <button>Get started</button>
          <button className="gold">Learn more</button>
        </div>
        <video
          className="home-video"
          src={BgVideo}
          autoPlay
          loop
          muted
        />
      </div>

    </main>
  )
}

export default Home
