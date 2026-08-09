function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Vishnupriya<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-link"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;