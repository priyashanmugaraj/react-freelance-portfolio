import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2>
          Jayapriya<span>.</span>
        </h2>
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <main id="home" className="hero">
        <p className="intro">HELLO, I'M JAYAPRIYA 👋</p>
        <h1>
          I build modern
          <br />
          <span>web experiences.</span>
        </h1>
        <p className="description">
          React.js Developer creating responsive, user-friendly websites and web
          applications.
        </p>
        <a className="button" href="#projects">
          Explore My Work →
        </a>
      </main>
      <section id="about" className="about">
        <p className="intro">HELLO, I'M JAYAPRIYA 👋</p>
        <h2>Turning ideas into web applications.</h2>
        <p className="description">
          I'm a React.js developer with professional experience building
          responsive web applications. I enjoy creating clean user interfaces,
          reusable components, and reliable frontend solutions.
        </p>
        <div className="skills">
          <span>React.js</span>
          <span>JavaScript</span>
          <span>HTML & CSS</span>
          <span>Node.js</span>
          <span>REST APIs</span>
          <span>Git</span>
        </div>
      </section>

      <section id="projects" className="projects">
        <p className="intro">MY WORK</p>
        <h2>Projects I've built</h2>
        <p className="description">
          Here are some examples of the web applications I can create for your
          business.
        </p>

        <div className="project-grid">
          <article className="project-card">
            <img
              src="/bloom.png"
              alt="Bloom Studio business website preview"
              className="project-image"
            />

            <h3>Bloom Studio — Business Website</h3>
            <p>
              A responsive business website featuring service cards, an about
              section, and contact links, built with React and CSS.
            </p>

            <span>React.js · CSS · Vite</span>

            <div className="project-links">
              <a
                href="https://bloom-studio-website-xxuh.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Website →
              </a>
              <a
                href="https://github.com/priyashanmugaraj/bloom-studio-website"
                target="_blank"
                rel="noreferrer"
              >
                GitHub →
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="intro">GET IN TOUCH</p>
        <h2>Let's work together.</h2>
        <p className="description">
          Have a project in mind? I'd love to help you build a modern,
          responsive website for your business.
        </p>
        <a
          className="contact-button"
          href="mailto:priyashanmugaraj95@gmail.com?subject=Freelance%20Project%20Inquiry"
        >
          Contact Me →
        </a>
      </section>
      <div className="social-links">
        <a
          href="https://github.com/priyashanmugaraj"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/jayapriya-s-b39573ab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default App;
