import { useState } from "react";
import Header from "../components/Header";

function About() {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  function mostrar() {
    setMostrarInfo(true);
  }
  function sacar() {
    setMostrarInfo(false);
  }

  return (
    <div className="page about-page">
      <Header
        titulo="Martiniano Ocampo"
        descripcion="Estudiante de programación | Desarrollo Web & Ciberseguridad"
      />

      <h1 className="section-heading">ABOUT ME</h1>

      <h2>Un poco sobre mí</h2>
      <p>
        Soy estudiante de la Tecnicatura Universitaria en Programación en la
        Universidad Tecnológica Nacional (UTN). Me apasiona la tecnología y
        disfruto aprender cómo funcionan las aplicaciones, desde su lógica
        interna hasta la experiencia que ofrecen al usuario.
      </p>

      {!mostrarInfo && (
        <button className="about-button" onClick={mostrar}>
          VER MÁS
        </button>
      )}

      {mostrarInfo && (
        <div className="about-extra">
          <h2>Mis intereses</h2>
          <p>
            Actualmente estoy enfocado en el desarrollo web, especialmente en
            JavaScript y React. También tengo un gran interés por la
            ciberseguridad, Linux y el hacking ético, áreas en las que busco
            seguir adquiriendo conocimientos y experiencia.
          </p>

          <h2>Mis objetivos</h2>
          <p>
            Mi objetivo es continuar creciendo como desarrollador, fortalecer
            mis conocimientos tanto en frontend como en backend y participar en
            proyectos que representen nuevos desafíos. Me interesa construir
            soluciones útiles, mejorar mis habilidades y seguir aprendiendo
            constantemente.
          </p>
          <button className="about-button" onClick={sacar}>
            VER MENOS
          </button>
        </div>
      )}
    </div>
  );
}

export default About;
