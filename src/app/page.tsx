import "./page.css";

export default function Home() {
  return (
    <div className="main-wrapper">
      {/* Hero Section */}
      <section className="hero container">
        <div className="hero-content animate-fade-in">
          <span className="badge glass">Software Agency</span>
          <h1 className="hero-title">
            Crafting Digital <br />
            <span className="text-gradient">Masterpieces</span>
          </h1>
          <p className="hero-description">
            We are Stray. A boutique software agency dedicated to building
            high-performance, premium digital experiences that push the
            boundaries of what's possible.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Start a Project</button>
            <button className="btn-secondary">View Work</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services container">
        <span className="section-label">Our Expertise</span>
        <h2 className="section-title">Soluciones que Escalan</h2>

        <div className="services-grid">
          <div className="service-card glass animate-fade-in">
            <div className="service-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3>Web Development</h3>
            <p>
              Modern applications built with Next.js, React, and
              high-performance technologies.
            </p>
          </div>

          <div
            className="service-card glass animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="service-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.5 1.5"></path>
                <path d="M7.11 7.11L5 5"></path>
              </svg>
            </div>
            <h3>UI/UX Design</h3>
            <p>
              Immersive digital experiences focused on user interaction and
              visual excellence.
            </p>
          </div>

          <div
            className="service-card glass animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="service-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3>Mobile First</h3>
            <p>
              Responsive solutions that look stunning on any device, from mobile
              to ultra-wide.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about container glass">
        <div className="about-content animate-fade-in">
          <span className="section-label">Nuestra Filosofía</span>
          <h2 className="section-title">Más que código</h2>
          <p className="about-text">
            No solo construimos software, creamos herramientas que impulsan el
            crecimiento. En Stray, nos enfocamos en la calidad artesanal
            aplicada a la ingeniería moderna.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact container">
        <div className="contact-card glass animate-fade-in">
          <span className="section-label">Hablemos</span>
          <h2 className="section-title">¿Tienes un proyecto en mente?</h2>
          <a
            href="mailto:hello@strav.agency"
            className="contact-email text-gradient"
          >
            hello@stray.agency
          </a>
          <button className="btn-primary">Empezar Ahora</button>
        </div>
      </section>

      <footer className="footer container">
        <p>&copy; 2024 Stray Software Agency. All rights reserved.</p>
      </footer>
    </div>
  );
}
