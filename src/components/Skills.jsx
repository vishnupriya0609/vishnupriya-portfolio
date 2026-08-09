function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      icon: "01",
      skills: ["Python", "SQL", "Java"]
    },

    {
      title: "Frontend Technologies",
      icon: "02",
      skills: ["HTML", "CSS", "React.js"]
    },

    {
      title: "Backend Technologies",
      icon: "03",
      skills: ["Node.js"]
    },

    {
      title: "Databases",
      icon: "04",
      skills: ["MySQL", "MongoDB"]
    },

    {
      title: "Tools",
      icon: "05",
      skills: ["Git", "GitHub", "Figma", "VS Code"]
    },

    {
      title: "Data Visualization",
      icon: "06",
      skills: ["Power BI", "Tableau"]
    }
  ];

  return (
    <section id="skills" className="section skills-section">

      <div className="section-title">
        <p>TECHNICAL SKILLS</p>
        <h2>What I Work With</h2>
      </div>

      <div className="skills-grid">

        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>

            <div className="skill-number">
              {group.icon}
            </div>

            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;