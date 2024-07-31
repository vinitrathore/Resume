import React from "react";
import "./App.css";
import img from "../src/img/vinit121.png";

function App() {
  return (
    <div className="App">
      <div className="left">
        <div className="image">
          <img src={img} className="imgc" alt="Personal" />
        </div>
        <div className="contact">
          <div className="contactinner">
            <h2>Contact</h2>
            <div className="underline"></div>
            <div className="emailc">
              <div className="email">Email:-</div>
              <div className="emailmatter">Vinitrathore1277@gmail.com</div>
              <div className="email">Mobile:-</div>
              <div className="emailmatter">9648201277</div>
              <div className="email">Address:-</div>
              <div className="emailmatter">
                Awadh vihar colony , Near Airport
              </div>
            </div>
          </div>
        </div>
        <div className="education">
          <div className="educationinner">
            <h2>Expertise</h2>
            <div className="underline"></div>
            <div className="emailc">
              <div className="email">ReactJS</div>
              <div className="email">React Native</div>
              <div className="email">SocketIO</div>
              <div className="email">JavaScript</div>
              <div className="email">NodeJS</div>
              <div className="email">ExpressJS</div>
              <div className="email">MongoDB</div>
            </div>
          </div>
        </div>
        <div className="skill">
          <div className="skillinner">
            <h2>Hobbies</h2>
            <div className="underline"></div>
            <div className="emailc">
              <div className="email">Bike Riding</div>
              <div className="email">Playing Badminton</div>
              <div className="email">Listening Songs</div>
              <div className="email">Internet Surfing</div>
              <div className="email">Reel Watching</div>
            </div>
          </div>
        </div>
        <div className="lang">
          <div className="langinner">
            <h2>Language</h2>
            <div className="underline"></div>

            <div className="emailc">
              <div className="email">Hindi</div>
              <div className="email">English</div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="rightinner">
          <div className="name">
            <div className="fname">Vinit Kumar</div>
            <div className="lname">Rathore</div>
            <a
              class="glink"
              href="https://www.github.com/vinitrathore"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.github.com/vinitrathore
            </a>
            
          </div>
          <div className="profile">
            <h2>Profile</h2>
            <div className="graph">
              <div className="runderline"></div>
              <p>
                Full Stack Developer specializing in React and React Native.
                Proficient in WebSocket, ReactJS, and React Native, I am
                dedicated to continuous learning and adapting to the evolving
                tech landscape. Committed to staying current and enhancing my
                skills to drive innovative projects.
              </p>
            </div>
          </div>
          <div className="experience">
            <h2>Experience</h2>
            <div className="graph">
              <div className="runderline"></div>
              <p>Summer Training</p>
              <p>MSCC , Jun/2022 - Aug/2022</p>
              <p>
                I learn many basic things related to android studio in this
                summer training. I m worked with an project which name is
                "Helper". helper is an real-time chat application.
              </p>
              <p>Company</p>
              <p>Infodeltasys Software Solutions Oct/2023 - Present</p>
              <p>
                I m currently working on a React Project “Shreddersbay” , for
                web , android and IOs.
              </p>
              {/* <a
              class="galink"
              href="https://play.google.com/store/apps/details?id=com.shreddersbay&hl=en_US"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://play.google.com/store/apps/details?id=com.shreddersbay&hl=en_US
            </a> */}
            </div>
          </div>
          <div className="edu">
            <h2>Education</h2>
            <div className="graph">
              <div className="runderline"></div>
              {/* <p>High School / 2016 with 84%</p>
              <p>S.M. Public School , U.P. Board</p>
              <p>Entermidiate / 2018 with 71%</p>
              <p>U.P.R.S. Inter College , U.P. Board</p> */}
              <p>B.C.A. / 2020 - 2023 with 76%</p>
              <p>University of Lucknow (L.U.)</p>
              <p>M.C.A. / 2024 - persuing</p>
              <p>Abdul Kalam Technical University (A.K.T.U.)</p>

              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
