function Experience() {
  const experiences = [
    {
      role: "UI/UX Design Intern",
      company: "ThisUX",
      description: [
        "Designed user-centered webpage interfaces with a focus on usability, accessibility, and visual design principles.",
        "Created wireframes and enhanced digital user experiences using modern UI/UX methodologies."
      ]
    },

    {
      role: "5G Technology Intern",
      company: "Vanmegam Networks",
      description: [
        "Gained practical knowledge of 5G network architecture, communication protocols, and mobile network fundamentals.",
        "Understood emerging wireless technologies and next-generation communication systems."
      ]
    },

    {
      role: "Web Development Intern",
      company: "Pantech Profabs India Pvt Ltd",
      description: [
        "Developed responsive web applications using HTML, CSS, JavaScript, and React.js concepts.",
        "Improved understanding of frontend development, user interfaces, and modern web technologies."
      ]
    },

    {
      role: "HR Intern",
      company: "Rane Madras Limited",
      description: [
        "Assisted in HR operations, employee management processes, and organizational workflow.",
        "Gained exposure to recruitment procedures, employee documentation, and workplace coordination.",
        "Strengthened professional communication, teamwork, and interpersonal skills."
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section">

      <div className="section-title">
        <p>EXPERIENCE</p>
        <h2>Internship Experience</h2>
      </div>

      <div className="timeline">

        {experiences.map((experience, index) => (
          <div className="experience-card" key={experience.company}>

            <div className="timeline-number">
              0{index + 1}
            </div>

            <div className="experience-content">

              <div className="experience-header">
                <div>
                  <h3>{experience.role}</h3>
                  <h4>{experience.company}</h4>
                </div>

                <span className="experience-dot"></span>
              </div>

              <ul>
                {experience.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Experience;