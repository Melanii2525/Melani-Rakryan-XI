import "./cv.css";

const Contact = () => (
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
);

export default Contact;
