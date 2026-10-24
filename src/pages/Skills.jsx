import Header from "../components/Header";
import Scard from "../components/Scard";

function Skills() {
  const habilidades = [
    {
      id: 1,
      nombre: "React",
      descripcion:
        "Desarrollo de interfaces dinámicas mediante componentes reutilizables, props y estados.",
      imagen:
        "https://tse2.mm.bing.net/th/id/OIP.mxIQjP6-pAEHKjO_5moxJQHaGb?r=0&w=1162&h=1010&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 2,
      nombre: "JavaScript",
      descripcion:
        "Programación de funcionalidades interactivas, manipulación de datos y lógica de aplicaciones web.",
      imagen:
        "https://tse1.mm.bing.net/th/id/OIP.1fuHy5m0ivTEfkM8hYERVgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 3,
      nombre: "Git",
      descripcion:
        "Control de versiones para registrar cambios y administrar el desarrollo de proyectos.",
      imagen:
        "https://th.bing.com/th/id/OIP.KGcZrD6_3nNYNlAw0_3rLQHaEK?w=278&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    },
    {
      id: 4,
      nombre: "GitHub",
      descripcion:
        "Administración de repositorios y almacenamiento de proyectos utilizando Git.",
      imagen:
        "https://th.bing.com/th/id/OIP.dsrvvGBV3mQRajwtxGwKfgHaHk?w=177&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    },
    {
      id: 5,
      nombre: "Kali Linux",
      descripcion:
        "Exploración de herramientas de ciberseguridad, análisis de sistemas y fundamentos de hacking ético.",
      imagen:
        "https://th.bing.com/th?id=OIF.6z%2fsKwBnbRm3%2fvzen49qgA&r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 6,
      nombre: "HTML / CSS",
      descripcion:
        "Estructuración de páginas web y diseño de interfaces visuales adaptables.",
      imagen:
        "https://th.bing.com/th/id/OIP.xubt7EGgW836olZfGtAvCgHaFj?w=250&h=187&c=7&r=0&o=7&pid=1.7&rm=3",
    },
  ];

  return (
    <div className="page skills-page">
      <Header
        titulo="Mis habilidades"
        descripcion="Tecnologías y herramientas que utilizo y sigo aprendiendo."
      />

      <h2 className="section-heading">TECH STACK</h2>

      <div className="skills-grid">
        {habilidades.map((habilidad) => (
          <Scard
            key={habilidad.id}
            nombre={habilidad.nombre}
            imagen={habilidad.imagen}
            descripcion={habilidad.descripcion}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
