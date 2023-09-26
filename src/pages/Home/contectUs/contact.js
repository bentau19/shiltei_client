import React, { useState } from 'react';
import './ContactUs.css'; // Import your CSS file for styling

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., sending data to a server
    console.log('Form Data:', formData);
  };

  return (
    <div style={{marginBottom:"20px", marginTop:"-20px",width:"60%",float: "left"}} className="contact-us-container">
      <form onSubmit={handleSubmit}>
        <div className="contact-us-form-group">
         
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="contact-us-input"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="contact-us-form-group">
        
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contact-us-input"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="contact-us-form-group">
  
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="contact-us-input"
            placeholder="Subject"
            required
          />
        </div>
        <div className="contact-us-form-group">

          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="contact-us-textarea"
            placeholder="Your Message"
            required
          />
        </div>
        <button type="submit" className="contact-us-button">Send</button>
      </form>
    </div>
  );
}

export default ContactUs;
