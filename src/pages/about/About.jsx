import "./About.css"

export const About = () => {
  return (
    <main className="about-container">
      <div className="about-container-div">
        <h2>About Us</h2>
        <div className="text-about">
          <div>
            <p className="text-title">Este trabajo contiene las siguientes tecnologias</p>
            <p>- Base de datos MySQL</p>
            <p>- Node con Express en el lado Backend</p>
            <p>- Para el frontend React y CSS</p>
          </div>
          <div>
            <p className="text-title">¿Que experiencias me da esta diplomatura?</p>
            <p>Trabajar con MySQL, Express, Node.js y React te proporciona una experiencia integral en el desarrollo full-stack, permitiéndote comprender y manejar tanto el frontend como el backend de una aplicación web</p>
            
            <p className="text-sub">MySQL</p>
            <p><strong>Gestión de Bases de Datos Relacionales:</strong> Aprendes a diseñar, crear y gestionar bases de datos relacionales. Comprendes cómo estructurar datos utilizando tablas, relaciones y claves primarias/foráneas.</p>
            <p><strong>Consultas SQL:</strong> Te vuelves competente en escribir consultas SQL complejas para obtener, insertar, actualizar y eliminar datos.</p>
            <p><strong>Optimización de Rendimiento:</strong> Adquieres habilidades en la optimización de consultas y el diseño de índices para mejorar el rendimiento de la base de datos.</p>
            
            <p className="text-sub">Express</p>
            <p><strong>Desarrollo de APIs RESTful: </strong>Aprendes a crear y manejar rutas para desarrollar APIs RESTful. Manejas solicitudes HTTP (GET, POST, PUT, DELETE) y respuestas.</p>
            <p><strong>Middleware:</strong> Comprendes el uso de middleware para gestionar la lógica de negocio, autenticar usuarios y manejar errores.</p>
            <p><strong>Integración con Bases de Datos:</strong> Ganas experiencia en la integración de bases de datos con tu servidor mediante ORM o controladores de bases de datos.</p>

            <p className="text-sub">Node.js</p>
            <p><strong>Programación Asíncrona:</strong> Te familiarizas con la programación asíncrona y el manejo de promesas y callbacks, lo que es crucial para manejar operaciones de E/S sin bloquear el hilo principal.</p>
            <p><strong>Ecosistema de NPM:</strong> Aprendes a utilizar el ecosistema de paquetes de NPM para encontrar y utilizar módulos que faciliten el desarrollo.</p>
            <p><strong>Construcción de Servidores Escalables:</strong> Adquieres habilidades en la construcción de servidores escalables y eficientes.</p>

            <p className="text-sub">React</p>
            <p><strong>Desarrollo de Interfaces de Usuario:</strong> Adquieres experiencia en el desarrollo de interfaces de usuario interactivas y dinámicas.</p>
            <p><strong>Componentes Reutilizables:</strong> Aprendes a crear y gestionar componentes reutilizables, lo que mejora la eficiencia y la mantenibilidad del código.</p>
            <p><strong>Estado y Props:</strong> Comprendes cómo manejar el estado y las props para gestionar la lógica de la interfaz de usuario.</p>
            <p><strong>Hooks:</strong> Utilizas hooks para manejar el estado y efectos secundarios de manera más simple y efectiva.</p>
          </div>
        </div>
      </div>
    </main >
  )
}



