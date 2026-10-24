import Header from "../components/Header";

function Contact() {
  const contactos = [
    {
      id: 1,
      nombre: "GitHub",
      descripcion: "Explorá mis repositorios y proyectos de programación.",
      imagen:
        "https://i.pinimg.com/736x/f1/93/1a/f1931a02bda35b43e86176955ba6472c.jpg",
      enlace: "https://github.com/martocarp",
    },
    {
      id: 2,
      nombre: "Email",
      descripcion: "Escribime para consultas, ideas o propuestas.",
      imagen: "https://www.pngmart.com/files/23/Gmail-Logo-PNG.png",
      enlace: "mailto:ocampomartiniano@gmail.com",
    },
  ];

  return (
    <div className="page contact-page">
      <Header
        titulo="Contacto"
        descripcion="Un espacio para conectar, compartir ideas y crear oportunidades"
      />

      <h2 className="section-heading">ENCONTRAME ACÁ</h2>

      <p>
        ¿Tenés algún proyecto en mente o simplemente querés ponerte en contacto?
        Me interesa conocer nuevas ideas, colaborar en proyectos y seguir
        aprendiendo junto a otras personas.
      </p>

      <h3 className="contact-subheading">Podés encontrarme en:</h3>

      <div className="contact-grid">
        {contactos.map((contacto) => (
          <div className="contact-card" key={contacto.id}>
            <img
              className="contact-image"
              src={contacto.imagen}
              alt={contacto.nombre}
            />

            <h3>{contacto.nombre}</h3>
            <p>{contacto.descripcion}</p>

            <a className="contact-link" href={contacto.enlace} target="blank">
              CONTACTAR
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
