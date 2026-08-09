function Certifications() {
  const certifications = [
    {
      number: "01",
      title:
        "NPTEL Certification – Design Thinking And Introduction To Research",
      organization: "NPTEL"
    },

    {
      number: "02",
      title:
        "UI/UX Webpage Designing Certification",
      organization: "ThisUX"
    },

    {
      number: "03",
      title:
        "5G Technology and Network Fundamentals Certification",
      organization: "Vanmegam Networks"
    },

    {
      number: "04",
      title:
        "AR/VR and Game Development Certification",
      organization: "Game Interactions"
    }
  ];

  return (
    <section
      id="certifications"
      className="section certifications-section"
    >

      <div className="section-title">
        <p>CERTIFICATIONS</p>
        <h2>Learning & Growth</h2>
      </div>

      <div className="certifications-grid">

        {certifications.map((certificate) => (
          <div
            className="certificate-card"
            key={certificate.number}
          >

            <div className="certificate-number">
              {certificate.number}
            </div>

            <div>
              <h3>{certificate.title}</h3>

              <p>{certificate.organization}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Certifications;