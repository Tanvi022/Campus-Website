import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.text();
      alert(result);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Error sending message");
    }
  };

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>Datta Meghe College of Engineering</h2>
        <ul>
          <li><a href="/home"> Home</a></li>
          
           <a href="/dashboard" target="_blank" rel="noopener noreferrer">Dashboard
          </a>
          <a href="/contact" target="_blank" rel="noopener noreferrer">
          Contact
          </a>
          <a href="/feature" target="_blank" rel="noopener noreferrer">
           Features
          </a>
          <a href="/gallery" target="_blank" rel="noopener noreferrer">
           Gallery
            </a>
          <a href="/login" target="_blank" rel="noopener noreferrer">
           Login
          </a>
          <a href="/virtualtour" target="_blank" rel="noopener noreferrer">
          Virtual Tour
          </a> 
        </ul>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <h1>Explore Campus</h1>
        <p>Gain education in a vibrant and healthy environment of our campus.</p>
        <button>Get Started</button>
      </section>

      {/* FEATURES */}
      <section id="features" className="features">
        <div className="card">
          <h3>Classrooms</h3>
          <p>Optimized classroom environments for effective learning.</p>
        </div>

        <div className="card">
          <h3>Labs</h3>
          <p>State-of-the-art laboratory facilities for hands-on learning.</p>
        </div>

        <div className="card">
          <h3>Auditorium</h3>
          <p>Spacious and well-equipped auditorium for events and gatherings.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Contact for Enquiry of Admission</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Apply Now</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer>
        <p>©Datta Meghe College of Engineering. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;