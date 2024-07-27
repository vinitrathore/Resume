import React from "react";
import "./App.css";
import { Contact, Education, ImageC, Profile, Project, Reference, Skill, WorkExp } from "./components/CompExp";


function App() {
  return (
    <div className="App">
      <div className="left">
        <div className="image">
          <ImageC/>
        </div>
        <div className="contact">
          <Contact/>
        </div>
        <div className="education">
          <Education/>
        </div>
        <div className="skill">
          <Skill/>
        </div>
      </div>
      <div className="right">
        <div className="profile"> 
          <Profile/>
        </div>
        <div className="work">
          <WorkExp/>
        </div>
        <div className="project">
          <Project/>
        </div>
        <div className="reference">
          <Reference/>
        </div>
      </div>
    </div>
  );
}

export default App;
