import React from "react";
import "./App.css";
import {
  Contact,
  Education,
  ImageC,
  Language,
  Profile,
  Project,
  Reference,
  Skill,
  WorkExp,
} from "./components/CompExp";

function App() {
  return (
    <div className="App">
      <div className="leftside">
        <ImageC />

        <Contact />

        <Education />

        <Skill />

        <Language />
      </div>
      <div className="rightside">
        <Profile />

        <WorkExp />

        <Project />

        <Reference />
      </div>
    </div>
  );
}

export default App;
