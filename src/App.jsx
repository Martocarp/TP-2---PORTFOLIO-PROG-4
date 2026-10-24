import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route as Ruta } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div
        className="Side-Bar app-shell"
        style={{ display: "flex", minHeight: "100vh" }}
      >
        <aside className="site-sidebar" style={{ width: "30%" }}>
          <Nav />
        </aside>
        <main className="Main-Content main-content" style={{ width: "70%" }}>
          <Routes>
            <Ruta path="/" element={<Home />}></Ruta>
            <Ruta path="/skills" element={<Skills />}></Ruta>
            <Ruta path="/about" element={<About />}></Ruta>
            <Ruta path="/projects" element={<Projects />}></Ruta>
            <Ruta path="/contact" element={<Contact />}></Ruta>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default App;
