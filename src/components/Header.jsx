function Header({ titulo, descripcion }) {
  return (
    <header className="page-header">
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
    </header>
  );
}

export default Header;
