function Contact() {
  return (
    <section id="contact" className="section contact-section">

      <div className="contact-box">

        <p className="contact-label">
          GET IN TOUCH
        </p>

        <h2>
          Let's connect and
          <span> build something.</span>
        </h2>

        <p className="contact-description">
          I am currently looking for opportunities where I can
          apply my technical skills, learn from experienced teams,
          and contribute to meaningful projects.
        </p>

        <a
          href="mailto:vtvishnupriya@gmail.com"
          className="btn primary-btn"
        >
          Send Me an Email →
        </a>

        <div className="contact-info">

          <a href="mailto:vtvishnupriya@gmail.com">
            vtvishnupriya@gmail.com
          </a>

          <a href="tel:+919025670455">
            +91 9025670455
          </a>

        </div>

        <div className="social-links contact-social">

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

        </div>

      </div>

    </section>
  );
}

export default Contact;