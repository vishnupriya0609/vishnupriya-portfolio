import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Experience />

        <Skills />

        <Projects />

        <Certifications />

        <Contact />
      </main>

      <footer>
        <div>
          <strong>Vishnupriya T</strong>
          <p>Computer Science Engineer</p>
        </div>

        <p>
          © 2026 Vishnupriya T. All rights reserved.
        </p>

        <a href="#home">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}

export default App;