import "./cv.css";

const Projects = () => (
  <section id="projects" className="projects">
    <div className="container">
      <h2>My Projects</h2>
      <p>
      My web development project involves building responsive,
      user-friendly websites using modern technologies for both front-end and back-end development.
      </p>
      <nav className="nav">
        <button className="nav-link">All</button>
        <button className="nav-link">Home</button>
        <button className="nav-link">Products</button>
        <button className="nav-link">Cart</button>
        <button className="nav-link">Login</button>
      </nav>
      <div className="projects-grid">
        <div className="project">
          <img src="https://cdn.dribbble.com/userupload/9268676/file/original-ead09f9d361f2b236eb7c70c3f4cb844.png?format=webp&resize=400x300&vertical=center" alt="Project 1" />
          <h4 className="n1">Web Design</h4>
          <h3>AirCalling Landing Page Design</h3>
          <button>Detail</button>
        </div>
        <div className="project">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp-GMGaFBxqbC2GQWNydz58b09EYrGyxL03A&s" alt="Project 2" />
          <h4 className="n1">Web Design</h4>
          <h3>Business Landing Page Design</h3>
          <button>Detail</button>
        </div>
        <div className="project">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyFDX1BFIp8OhhWyvjP-QpWZlt3U5XCAIJA&s" alt="Project 3" />
          <h4 className="n1">Web Design</h4>
          <h3>Ecom Web LandingPage Design</h3>
          <button>Detail</button>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
