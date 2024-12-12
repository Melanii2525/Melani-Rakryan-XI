import "./cv.css";

const Services = () => (
  <section id="services" className="services">
    <div className="container">
      <h2>Services</h2>
      <p>Here are some of the services I provide to help you succeed.</p>
      <div className="services-grid">
        <div className="service">
          <img
            src="https://i.pinimg.com/736x/74/13/eb/7413eb389b7360e1c6f96a8114995989.jpg"
            alt="UI/UX Design"
            className="service-img"
          />
          <h3>UI/UX</h3>
          <p>Creative and responsive designs tailored to your needs.</p>
        </div>
        <div className="service">
          <img
            src="https://img.freepik.com/premium-vector/web-design-logo-vector-templet_1070930-291.jpg?semt=ais_hybrid"
            alt="Web Design"
            className="service-img"
          />
          <h3>Web Design</h3>
          <p>Creative and responsive designs tailored to your needs.</p>
        </div>
        <div className="service">
          <img
            src="https://cdn.logojoy.com/wp-content/uploads/20220329171712/dating-app-logo-tinder.png"
            alt="App Design"
            className="service-img"
          />
          <h3>App Design</h3>
          <p>Functional and modern mobile application designs.</p>
        </div>
        <div className="service">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSVArQbVeuhGQ_VjtfMEy7z0Vpe_BmLsHnEpJvZg_qd7ucIvKEutqDdaBIgmRBtYz88jM&usqp=CAU"
            alt="Graphic Design"
            className="service-img"
          />
          <h3>Graphic Design</h3>
          <p>Professional and eye-catching graphic designs.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
