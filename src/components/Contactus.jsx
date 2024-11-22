import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-header">Contact Us</h2>
      <form className="contact-form">
        <div className="contact-input-group">
          <label htmlFor="name" className="contact-label">Name:</label>
          <input type="text" id="name" name="name" className="contact-input" placeholder="Your Name" />
        </div>
        <div className="contact-input-group">
          <label htmlFor="email" className="contact-label">Email:</label>
          <input type="email" id="email" name="email" className="contact-input" placeholder="Your Email" />
        </div>
        <div className="contact-input-group">
          <label htmlFor="message" className="contact-label">Message:</label>
          <textarea id="message" name="message" className="contact-textarea" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="contact-button">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
