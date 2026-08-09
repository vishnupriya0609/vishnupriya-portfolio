function Projects() {
  const projects = [
    {
      number: "01",
      title:
        "Intelligent Workforce Deskilling Prediction and Adaptive Training Optimization System",

      description:
        "Developed an intelligent system to analyze workforce skill gaps and predict potential deskilling risks. Designed adaptive training recommendation techniques to provide personalized learning paths.",

      technologies: [
        "Python",
        "Data Analysis",
        "Machine Learning"
      ]
    },

    {
      number: "02",
      title:
        "Subscriber Profile Management using Open5GS and MongoDB",

      description:
        "Developed a web-based subscriber management system for telecom networks using Open5GS and MongoDB. Implemented subscriber profile creation, modification, and retrieval functionalities.",

      technologies: [
        "MongoDB",
        "Open5GS",
        "Web Development"
      ]
    },

    {
      number: "03",
      title:
        "Hostel Outing Permission Management UI/UX Design",

      description:
        "Designed a responsive web interface with QR-based verification to replace traditional manual outpass systems and improve usability, navigation, and student experience.",

      technologies: [
        "UI/UX",
        "Figma",
        "QR Verification"
      ]
    }
  ];

  return (
    <section id="projects" className="section projects-section">

      <div className="section-title">
        <p>MY WORK</p>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <article className="project-card" key={project.number}>

            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-arrow">↗</span>
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tags">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Projects;