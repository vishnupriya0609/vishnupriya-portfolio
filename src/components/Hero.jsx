function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <p className="hero-intro">Hello, I'm</p>

        <h1>Vishnupriya T</h1>

        <h2>Aspiring Data Engineer</h2>

        <p className="hero-description">
           A passionate Computer Science Engineering graduate aspiring to build
          a career in Data Engineering, with an interest in data pipelines,
          cloud technologies, and building practical data solutions.
        </p>

        <div className="hero-skills">
          <span>Python</span>
          <span>SQL</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>MySQL</span>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View Projects →
          </a>

          <a
            href="/resume.pdf"
            download
            className="btn secondary-btn"
          >
            Download Resume
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/vishnupriya0609"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/vishnupriya-t-893b1327a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href="mailto:vtvishnupriya@gmail.com">
            Email ↗
          </a>
        </div>

      </div>

      <div className="hero-card">
        <div className="code-window">

          <div className="window-header">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="code-content">
            <p>
              <span className="purple">const</span>{" "}
              developer = {"{"}
            </p>

            <p>
              &nbsp;&nbsp;name:{" "}
              <span className="green">"Vishnupriya"</span>,
            </p>

            <p>
              &nbsp;&nbsp;role:{" "}
              <span className="green">"CSE Graduate"</span>,
            </p>

            <p>
              &nbsp;&nbsp;skills: [
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="green">"Python"</span>,
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="green">"SQL"</span>,
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="green">"React"</span>
            </p>

            <p>&nbsp;&nbsp;]</p>

            <p>{"};"}</p>

            <p className="comment">
              // Always learning 🚀
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;