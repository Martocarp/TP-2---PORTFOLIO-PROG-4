function Pcard({ nombre, imagen, descripcion, tecnologias }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{nombre}</h3>
      <img className="project-image" src={imagen} />
      <p className="project-description">{descripcion}</p>
      <h5 className="project-tech">{tecnologias}</h5>
    </div>
  );
}
export default Pcard;
