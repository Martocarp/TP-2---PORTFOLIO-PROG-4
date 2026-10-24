import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page home-page">
      <h1 id="tm_name">
        MAOC<span id="barra_baja">_</span>
      </h1>
      <h3 className="home-greeting">Hola, soy Martiniano Ocampo</h3>
      <h4 className="home-role">
        Desarrollador web en formación | Full Stack & Ciberseguridad
      </h4>{" "}
      <br />
      <br />
      <Link className="primary-link" to="/about">
        CONOCER MAS
      </Link>
    </div>
  );
}
export default Home;
