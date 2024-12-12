import "./cv.css";

function cv() {
  return (
    <div>
      <header className="navbar">
        <div className="container">
          <h1 className="logo">FAWZIUIUX</h1>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About Me</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
            <button className="cv-button">Download CV</button>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Hi I Am <br />
            <span className="m1">Fawzi Sahwed</span></h2>
            <h1 className="m2">Website Developer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia risus at purus suscipit,
                eu euismod ligula efficitur. Mauris eget justo in augue lacinia ullamcorper.
                Phasellus ut sapien non risus feugiat dignissim ac vel lorem. Cras auctor mollis eros, in venenatis sapien interdum at. Integer ac sagittis eros. Sed non dui vitae libero fringilla varius. Fusce auctor nisl in dui feugiat, ut mollis odio auctor. Nulla facilisi. In sit amet leo a orci venenatis viverra.</p>
            <button className="m3">Hire Me</button>
          </div>
          <div className="hero-image">
            <img src="https://i.pinimg.com/736x/92/70/02/927002368dfb5a96427ae990838dd112.jpg" alt="Profile" />
          </div>
          
        </div>
      </section>

    <section id="services" className="services">
    <div className="container">
        <h2>Services</h2>
        <p>Here are some of the services I provide to help you succeed.</p>
        <div className="services-grid">
        <div className="service">
            <img src="https://i.pinimg.com/736x/74/13/eb/7413eb389b7360e1c6f96a8114995989.jpg" alt="UI/UX Design" className="service-img" />
            <h3>UI/UX</h3>
            <p>Creative and responsive designs tailored to your needs.</p>
        </div>

        <div className="service">
            <img src="https://img.freepik.com/premium-vector/web-design-logo-vector-templet_1070930-291.jpg?semt=ais_hybrid" alt="Web Design" className="service-img" />
            <h3>Web Design</h3>
            <p>Creative and responsive designs tailored to your needs.</p>
        </div>
        <div className="service">
            <img src="https://cdn.logojoy.com/wp-content/uploads/20220329171712/dating-app-logo-tinder.png" alt="App Design" className="service-img" />
            <h3>App Design</h3>
            <p>Functional and modern mobile application designs.</p>
        </div>

        <div className="service">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSVArQbVeuhGQ_VjtfMEy7z0Vpe_BmLsHnEpJvZg_qd7ucIvKEutqDdaBIgmRBtYz88jM&usqp=CAU" alt="Grapich Design" className="service-img" />
            <h3>Graphic Design</h3>
            <p>Professional and eye-catching graphic designs.</p>
        </div>
        </div>
    </div>
    </section>

    <section id="projects" className="projects">
    <div className="container">
        <h2>My Projects</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia risus at purus suscipit, eu euismod ligula efficitur. Mauris eget justo in augue lacinia ullamcorper.</p>
        <nav className="nav">
        <button className="nav-link">All</button>
          <button className="nav-link">Home</button>
          <button className="nav-link">Products</button>
          <button className="nav-link">Cart</button>
          <button className="nav-link">Login</button>
        </nav>
        <div className="projects-grid">
        <div className="project">
            <img src="https://via.placeholder.com/300" alt="Project 1" />
            <h3>Web Design</h3>
            <p>Landing Page Design</p>
        </div>
        <div className="project">
            <img src="https://via.placeholder.com/300" alt="Project 2" />
            <h3>Web Design</h3>
            <p>E-Commerce Website</p>
        </div>
        <div className="project">
            <img src="https://via.placeholder.com/300" alt="Project 3" />
            <h3>Web Design</h3>
            <p>Portfolio Website</p>
        </div>
        </div>
    </div>
    </section>

    <section id="contact" className="contact">
    <div className="container-1">
    <h2>Lets Design Together</h2>
    <p>Send me a message and lets create something amazing together!</p>
    <form>
      <input type="text" placeholder="Enter your email" required />
      <button type="submit">Contact me</button>
    </form>
    </div>
    </section>

    <section id="logo-2" className="logo-2">
  <div className="logo-2-text">FAWZIUIUX</div>
  <nav className="navbar-2">
    <button className="nav-item">Home</button>
    <button className="nav-item">About Me</button>
    <button className="nav-item">Services</button>
    <button className="nav-item">Projects</button>
    <button className="nav-item">Testimonials</button>
    <button className="nav-item">Contact</button>
  </nav>
</section>

<footer className="footer">
        <p>&copy; 2024 FAWWAZNUXE. All Rights Reserved.</p>
</footer>
    </div>
  );
}

export default cv;
