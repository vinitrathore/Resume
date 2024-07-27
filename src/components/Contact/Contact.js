import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="heading">Contact</div>
      <div className="seperation"></div>
      <div className="main">
        <div className="phone">
          <div className="phoneheading">Phone:--</div>
          <div className="phonename">9648201277</div>
        </div>
        <div className="email">
          <div className="emailheading">Email:--</div>
          <div className="emailname">Vinitrathore1277@gmail.com</div>
        </div>
        <div className="address">
          <div className="addressheading">Address:--</div>
          <div className="addressname">Airport , Lucknow India</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
