import "./App.css";

const projects = [
  {
    title: "VL Management",
    description:
      "A corporate cab management platform for managing companies, vehicles, drivers, trips, attendance, and operational analytics.",
    tech: ["React", "NestJS", "Prisma", "PostgreSQL", "JWT"],
    github: "https://github.com/TarunAdusumilli1212",
  },
  {
    title: "HFund",
    description:
      "A shared fund management application designed to track contributions, members, and shared financial activity.",
    tech: ["React", "FastAPI", "PostgreSQL", "SQLAlchemy"],
    github: "https://github.com/TarunAdusumilli1212/Hfund",
  },
  {
    title: "Blog API",
    description:
      "A REST API built while exploring production-oriented FastAPI development, including validation, dependency injection, authentication, and database operations.",
    tech: ["FastAPI", "Python", "SQLAlchemy", "SQLite", "Pydantic"],
    github: "https://github.com/TarunAdusumilli1212",
  },
];

const skills = [
  "Python",
  "FastAPI",
  "REST APIs",
  "SQL",
  "PostgreSQL",
  "SQLAlchemy",
  "Prisma",
  "NestJS",
  "React",
  "JavaScript",
  "Git",
  "GitHub",
  "Docker",
  "Selenium",
  "Tosca",
];

function App() {
  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Tarun<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </div>

        <a href="#contact" className="nav-contact">
          Contact
        </a>
      </nav>

      {/* HERO */}
      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">HELLO, I'M TARUN</p>

            <h1>
              Software
              <br />
              <span>Engineer.</span>
            </h1>

            <p className="hero-description">
              Turning ideas into APIs, workflows into automation,
              and problems into working systems.
            </p>
          

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                View Projects
                <span>↗</span>
              </a>

              <a
                href="https://github.com/TarunAdusumilli1212"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span>tarun.py</span>
              </div>

              <div className="terminal-body">
                <p>
                  <span className="keyword">class</span>{" "}
                  <span className="class-name">BackendEngineer</span>:
                </p>

                <p className="indent">
                  <span className="keyword">def</span>{" "}
                  <span className="function">build</span>(self):
                </p>

                <p className="indent-2">
                  <span className="keyword">return</span> [
                </p>

                <p className="indent-3">
                  <span className="string">"APIs"</span>,
                </p>

                <p className="indent-3">
                  <span className="string">"Databases"</span>,
                </p>

                <p className="indent-3">
                  <span className="string">"Automation"</span>,
                </p>

                <p className="indent-3">
                  <span className="string">"Scalable Systems"</span>
                </p>

                <p className="indent-2">]</p>

                <p className="cursor-line">
                  <span className="cursor"></span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about">
          <div className="section-label">
            <span>01</span>
            ABOUT ME
          </div>

          <div className="about-content">
            <div>
              <h2>
                Turning problems into
                <br />
                <span>working systems.</span>
              </h2>
            </div>

            <div className="about-text">
              <p>
                I'm a Computer Science graduate currently working at STRADA,
                where I work on enterprise automation and payroll systems.
              </p>

              <p>
                My current focus is moving deeper into backend engineering,
                building APIs and database-driven applications using Python,
                FastAPI, SQLAlchemy, PostgreSQL, and related technologies.
              </p>

              <p>
                I enjoy understanding what happens behind the abstraction —
                from an HTTP request entering an API to database queries,
                authentication, validation, and the response returning to the
                client.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="section-label">
            <span>02</span>
            EXPERIENCE
          </div>

          <div className="experience-card">
            <div className="experience-date">AUG 2024 — PRESENT</div>

            <div className="experience-main">
              <h3>Graduate Trainee Engineer</h3>
              <h4>STRADA · Hyderabad</h4>

              <p>
                Working on enterprise payroll automation and testing
                workflows, with a focus on reliable automation and system
                integration.
              </p>

              <div className="tag-list">
                <span>Python</span>
                <span>Selenium</span>
                <span>Tosca</span>
                <span>REST APIs</span>
                <span>MySQL</span>
                <span>SAP</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="section-label">
            <span>03</span>
            SELECTED PROJECTS
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">
                  0{index + 1}
                </div>

                <div className="project-top">
                  <h3>{project.title}</h3>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub`}
                  >
                    ↗
                  </a>
                </div>

                <p>{project.description}</p>

                <div className="tag-list">
                  {project.tech.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="section-label">
            <span>04</span>
            TECH STACK
          </div>

          <div className="skills-wrapper">
            <div className="skills-heading">
              <h2>
                Tools I use to
                <br />
                <span>build things.</span>
              </h2>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill" key={skill}>
                  <span>◆</span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section education">
          <div className="section-label">
            <span>05</span>
            EDUCATION
          </div>

          <div className="education-card">
            <div>
              <h3>Bachelor of Science in Computer Science</h3>
              <p>Amrita Vishwa Vidyapeetham · Coimbatore</p>
            </div>

            <div className="education-year">
              2020 — 2024
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <p className="eyebrow">GET IN TOUCH</p>

          <h2>
            Let's build something
            <br />
            <span>useful.</span>
          </h2>

          <p>
            I'm currently interested in new
            opportunities and challenging projects.
          </p>

          <div className="contact-details">
            <a href="mailto:adusumillitarun12@gmail.com" className="contact-item">
              <span className="contact-label">EMAIL</span>
              <span className="contact-value">
                adusumillitarun12@gmail.com
              </span>
            </a>

            <a href="tel:+918886463658" className="contact-item">
              <span className="contact-label">PHONE</span>
              <span className="contact-value">
                +91 88864 63658
              </span>
            </a>
          </div>

          <div className="contact-actions">
            <a
              href="mailto:adusumillitarun12@gmail.com"
              className="primary-btn"
            >
              Send Email
              <span>↗</span>
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/TarunAdusumilli1212"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/tarun"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>


      </main>

      {/* FOOTER */}
      <footer>
        <span>© {new Date().getFullYear()} Tarun Adusumilli</span>

        <span>Built with React</span>
      </footer>
    </div>
  );
}

export default App;