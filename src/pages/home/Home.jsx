import BgVideo from "../../assets/video/video.webm"
import "./Home.css"

export const Home = () => {
  return (
    <main>
      <div className="home-container">
        <h1 className="home-h1">Proyecto dedicado a UTN</h1>
        <p className="home-p">
          Este es el proyecto dedicado a la diplomatura de programacion web full stack con react js        </p>
        
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

