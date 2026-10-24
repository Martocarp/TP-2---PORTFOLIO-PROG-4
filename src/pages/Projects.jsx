import Header from "../components/Header";
import Pcard from "../components/Pcard";

function Projects() {
  const proyectos = [
    {
      id: 1,
      nombre: "BULLS",
      descripcion:
        "Plataforma web para una tienda de suplementos deportivos. Permite explorar productos, consultar sus características y facilitar la comunicación con el negocio mediante WhatsApp.",
      tecnologias: "React, JavaScript, HTML, CSS",
      imagen: "/images/projects/LOGO_PNG.png",
    },
    {
      id: 2,
      nombre: "Torneito",
      descripcion:
        "Aplicación para organizar torneos de fútbol entre amigos, administrar participantes, crear competiciones y registrar resultados.",
      tecnologias: "HTML, CSS, JavaScript",
      imagen:
        "https://img.freepik.com/free-vector/champions-league-trophy-illustration-vector_602089-181.jpg?w=2000",
    },
    {
      id: 3,
      nombre: "BOGAPP",
      descripcion:
        "Proyecto de plataforma digital que busca conectar clientes con estudios jurídicos, facilitando el seguimiento de casos, la comunicación y la gestión de información.",
      tecnologias: "Proyecto en planificación",
      imagen: "/images/projects/LOGO_WHITE.jpeg",
    },
  ];

  return (
    <div className="page projects-page">
      <Header
        titulo="Mis proyectos"
        descripcion="Una selección de proyectos personales y académicos en los que aplico mis conocimientos."
      />

      <h2 className="section-heading">PROJECTS</h2>

      <div className="projects-grid">
        {proyectos.map((proyecto) => (
          <Pcard
            key={proyecto.id}
            nombre={proyecto.nombre}
            descripcion={proyecto.descripcion}
            tecnologias={proyecto.tecnologias}
            imagen={proyecto.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
