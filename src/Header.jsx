import { useRef } from 'react';
import './cv.css';

const Header = () => {

  const aboutMeRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAboutMe = () => {
    aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProducts = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="navbar">
      <div className="container">
        <h1 className="logo">AZZURAUIUX</h1>
        <nav className="nav">
          <a href="#home" onClick={scrollToAboutMe}>About Me</a>
          <a href="#services" onClick={scrollToServices}>Services</a>
          <a href="#projects" onClick={scrollToProducts}>Projects</a>
          <a href="#contact" onClick={scrollToContact}>Contact</a>
          <button className="cv-button">Download CV</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
