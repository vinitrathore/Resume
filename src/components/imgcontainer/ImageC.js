import React from "react";
import "./Imagec.css";
import logo from "../../../src/img/vinit.jpg";

function ImageC() {
  return (
    <div className="imgbg">
      <img src={logo} alt="vinit"  className="img"/>
    </div>
  );
}

export default ImageC;
