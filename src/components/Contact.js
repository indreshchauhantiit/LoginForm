import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, your message is submitted.`);
    // Yahan aap API ya backend me data bhej sakte ho
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Your Name:</label><br />
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div>
          <label>Your Email:</label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div>
          <label>Message:</label><br />
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </div>

        <button type="submit">Send Message</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <h3>Our Contact Info:</h3>
        <p>📞 Phone: +91-9876543210</p>
        <p>📧 Email: support@example.com</p>
        <p>📍 Address: 123, React Nagar, India</p>
      </div>
    </div>
  );
};

export default Contact;
