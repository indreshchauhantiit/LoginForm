import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import './Home.css';

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    alert("Form data saved to localStorage!");

    // Optionally clear form after submit
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div>
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h3>GET IN TOUCH</h3>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit.
            </p>
            <p><strong>Email:</strong> redwan@responsiveweb.com</p>
            <p><strong>Phone:</strong> 01761740273</p>
            <p><strong>Address:</strong> Golden Tower, BBA, Sylhet, Bangladesh</p>
          </div>
          <div className="contact-form">
            <h3>SAY SOMETHING</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name.."
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Mail.."
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="footer-left">
            <h2>AASHA</h2>
            <p>Aasha nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="footer-right">
            <h4>ABOUT US</h4>
            <p>
              Aasha nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit.
            </p>
          </div>
        </div>
        <div className="footer-links">
          <Link to="#">HOME</Link>
          <Link to="#">PORTFOLIO</Link>
          <Link to="#">SERVICES</Link>
          <Link to="#">TEAM MEMBER</Link>
          <Link to="#">CLIENT</Link>
          <Link to="#">CONTACT</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
