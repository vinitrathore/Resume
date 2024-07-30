import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1 className="heading">Contact</h1>
      <div className="separator"></div>
      <div className="contact-details">
        <div className="contact-item">
          <h2 className="contact-label">Phone:</h2>
          <p className="contact-info">9648201277</p>
        </div>
        <div className="contact-item">
          <h2 className="contact-label">Email:</h2>
          <p className="contact-info">Vinitrathore1277@gmail.com</p>
        </div>
        <div className="contact-item">
          <h2 className="contact-label">Address:</h2>
          <p className="contact-info">Airport, Lucknow, India</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
