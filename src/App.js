import React from "react";
import "./App.css";
import img from "../src/img/personal.png";

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

            <div className="email">Email:-</div>
            <div className="emailmatter">Vinitrathore1277@gmail.com</div>
            <div className="email">Mobile:-</div>
            <div className="emailmatter">9648201277</div>
            <div className="email">Address:-</div>
            <div className="emailmatter">Awadh vihar colony , Near Airport</div>
          </div>
        </div>
        <div className="education">
          <div className="educationinner">
            <h2>Education</h2>
            <div className="underline"></div>

            <div className="email">
              Graduation:-B.C.A. (Bachelor's in computer application)
            </div>
            <div className="emailmatter">University of Lucknow 2023</div>
            <div className="email">
              Post Graduation:-M.C.A. (Master's in computer application)
            </div>
            <div className="emailmatter">AKTU Persuing</div>
          </div>
        </div>
        <div className="skill">
          <div className="skillinner">
            <h2>Expertise</h2>
            <div className="underline"></div>

            <div className="email">ReactJS</div>
            <div className="email">React Native</div>
            <div className="email">SocketIO</div>
            <div className="email">JavaScript</div>
            <div className="email">NodeJS</div>
            <div className="email">ExpressJS</div>
            <div className="email">MongoDB</div>
            <div className="email"></div>
          </div>
        </div>
        <div className="lang">
          <div className="langinner">
            <h2>Language</h2>
            <div className="underline"></div>

            <div className="email">Hindi</div>
            <div className="email">English</div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="rightinner">
          <div className="name">
            <div className="fname">Vinit Kumar</div>
            <div className="lname">Rathore</div>
            <div className="glink">https://www.github.com/vinitrathore</div>
          </div>
          <div className="profile">
            <h2>Profile</h2>
            <div className="graph">
            <div className="runderline"></div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi enim quis quo quasi ducimus, facilis tempore consequuntur atque sequi mollitia dolorem. Dignissimos facere esse ipsum illum quidem veniam, repellendus molestiae.</p>
            </div>
          </div>
          <div className="experience">
            <h2>Experience</h2>
            <div className="graph">
              <div className="runderline"></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum a adipisci! Eos, in. Eveniet cumque sapiente, dolorem nesciunt ducimus consequuntur voluptate commodi distinctio ad temporibus exercitationem assumenda nam inventore vitae iste magnam placeat reiciendis autem. Omnis, nostrum quisquam doloribus enim natus doloremque! Numquam, deleniti. Atque neque omnis autem dolorum eligendi. Culpa, perspiciatis sapiente! Nesciunt omnis provident aliquam dignissimos eveniet animi cum aut, quas sequi?</p>
            </div>
          </div>
          <div className="edu">
            <h2>Education</h2>
            <div className="graph">
              <div className="runderline"></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, cumque! Dicta aliquid ratione similique neque reprehenderit! Quis fuga possimus, cupiditate laudantium, molestiae minus soluta voluptatibus libero dolorem consectetur est repellat?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
