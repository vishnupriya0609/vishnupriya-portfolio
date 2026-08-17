import { useState } from "react";

function ProjectCard({ project }) {
  const [showImages, setShowImages] = useState(false);

  return (
    <article className="project-card">

      {/* Project Number */}
      <div className="project-top">
        <span className="project-number">
          {project.number}
        </span>

        <span className="project-arrow">
          ↗
        </span>
      </div>


      {/* COVER IMAGE */}
      {project.cover && (
        <div className="project-cover">
          <img
            src={project.cover}
            alt={project.title}
            className="project-cover-image"
          />
        </div>
      )}


      {/* Project Title */}
      <h3>
        {project.title}
      </h3>


      {/* Project Description */}
      <p>
        {project.description}
      </p>


      {/* Technologies */}
      <div className="project-tags">
        {project.technologies.map((technology) => (
          <span key={technology}>
            {technology}
          </span>
        ))}
      </div>


      {/* Buttons */}
      <div className="project-links">

        {/* Watch Demo */}
        {project.video && (
          <a
            href={project.video}
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            Watch Demo ▶
          </a>
        )}


        {/* View Images */}
        {project.images && (
          <button
            onClick={() => setShowImages(!showImages)}
            className="project-btn project-image-btn"
          >
            {showImages ? "Hide Images ↑" : "View Images ↗"}
          </button>
        )}

      </div>


      {/* ALL 6 IMAGES */}
      {showImages && project.images && (
        <div className="project-gallery">

          <div className="gallery-title">
            <span>PROJECT SCREENSHOTS</span>
            <p>Workforce System Interface</p>
          </div>


          <div className="gallery-grid">

            {project.images.map((image, index) => (
              <a
                href={image}
                target="_blank"
                rel="noreferrer"
                key={image}
                className="gallery-item"
              >

                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                />

                <span className="image-number">
                  0{index + 1}
                </span>

              </a>
            ))}

          </div>

        </div>
      )}

    </article>
  );
}


function Projects() {

  const projects = [

    /* =================================
       PROJECT 01 - WORKFORCE
       ================================= */

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
      ],

      /* COVER IMAGE */
      cover: "/projects/workforce.jpeg",

      /* SIX PROJECT IMAGES */
      images: [
        "/projects/img1.jpeg",
        "/projects/img2.jpeg",
        "/projects/img3.jpeg",
        "/projects/img4.jpeg",
        "/projects/img5.jpeg",
        "/projects/img6.jpeg"
      ],

      /* PROJECT VIDEO */
      video: "/projects/workforce-demo.mp4"
    },


    /* =================================
       PROJECT 02
       ================================= */

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


    /* =================================
       PROJECT 03
       ================================= */

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
    <section
      id="projects"
      className="section projects-section"
    >

      {/* Section Heading */}

      <div className="section-title">

        <p>MY WORK</p>

        <h2>
          Featured Projects
        </h2>

      </div>


      {/* Projects */}

      <div className="projects-grid">

        {projects.map((project) => (
          <ProjectCard
            key={project.number}
            project={project}
          />
        ))}

      </div>

    </section>
  );
}


export default Projects;