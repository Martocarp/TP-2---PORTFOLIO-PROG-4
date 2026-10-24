function Scard({ nombre, descripcion, imagen }) {
  return (
    <div className="skill-card">
      <h3 className="skill-title">{nombre}</h3>
      <img className="skill-image" src={imagen} />
      <p className="skill-description">{descripcion}</p>
    </div>
  );
}

export default Scard;
