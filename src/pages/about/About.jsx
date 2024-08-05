import ImageAbout from "../../assets/img/img-about.webp"
import "./About.css"
export const About = () => {
  return (
    <main>
      <div className="about-container">
        <h2>About Us</h2>
        <div className="about-img-text">
          <img src={ImageAbout} alt="" className="img-about" />
          <div className="p-container">
            <p>
              <span>"</span>Somos una agencia especializada en diseño web, desarrollo web, branding y marketing digital. Nuestro objetivo es transformar tus ideas en soluciones digitales impactantes y efectivas. Nos apasiona crear experiencias únicas que conecten a las marcas con su audiencia, impulsando su crecimiento y éxito en el entorno digital. <span>"</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}



