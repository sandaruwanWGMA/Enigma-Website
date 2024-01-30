import React from "react";
import home_bg_img from "./assets/Images-home-page/home_bg_img.jpeg";
import enigmaLogo from "./assets/Images-home-page/enigma_logo.svg";
import SovietTroops from "./assets/EventTimeline/SovietTroops.png";
import airplaneBig from "./assets/EventTimeline/Group35.png";
import guidelineBackground from "./assets/Guidelines/guidelineBackground.svg";
import soldier from "./assets/Guidelines/soldier.svg";
import Cloud from "./assets/Guidelines/Cloud.svg";
import "./App.css";
import CountdownTimer from "./components/CountdownTimer";
import NavBar from "./components/NabBar";
import "./components/VerticalLine.css";
import "./styles/SocialIcons.css";
import { ReactComponent as FacebookIcon } from "./assets/Images-home-page/facebook-icon.svg";
import { ReactComponent as LinkedInIcon } from "./assets/Images-home-page/linkedin-icon.svg";
import { ReactComponent as InstagramIcon } from "./assets/Images-home-page/instagram-icon.svg";
import { ReactComponent as Enigma } from "./assets/Images-home-page/Enigma.svg";
import rectangle from "./assets/Images-home-page/Rectangle 1.png";
import "./styles/HomeStyles.css";

const App = () => {
  return (
    <>
      <section id="home" className="home-section">
        <Enigma className="enigma"></Enigma>
        <NavBar
          style={{
            position: "absolute",
            right: "10em",
          }}
        ></NavBar>
        <div className="social-media">
          <div className="vertical-line"></div>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-icon"
          >
            <LinkedInIcon className="linkedin-icon" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook-icon"
          >
            <FacebookIcon className="facebook-icon" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-icon"
          >
            <InstagramIcon className="instagram-icon" />
          </a>
        </div>
        <div className="image-overlay"></div>
        <img src={home_bg_img} alt="home-bg-image" className="home-bg-img" />
        <img src={enigmaLogo} alt="enigma-logo" className="enigma-logo" />
        <CountdownTimer
          style={{
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        ></CountdownTimer>
        <button className="reg-btn">
          <img src={rectangle} alt="rectangle" className="rectangle"></img>
          <span className="reg-text">REGISTER NOW</span>
        </button>
      </section>
      <section id="timeline">
        <div className="frame">
          <div className="div5"></div>
          <div className="div4"></div>

          <div className="div3"></div>

          <div className="div2"></div>

          <div className="div1"></div>
          <div className="div6"></div>
          <img
            src={SovietTroops}
            alt="Soviet Troops"
            className="SovietTroops"
          />

          <div className="airplaneBig">
            <img src={airplaneBig} alt="airplaneBig" />
          </div>
          <div className="eventTimeline">
            <h1 id="eventTimeline">Event TimeLine</h1>
          </div>
        </div>

        <div className="guideline">
          <img
            className="backgroundImg"
            src={guidelineBackground}
            alt="guidelineBackground"
          />
          <div className="guidelinePicture">
            <img src={soldier} alt="guidelineBackground" />
          </div>
          <div className="guidelineTexts">
            <div className="guidelineTopic">
              <h1 id="guidelineTopic">Guidelines</h1>
            </div>
            <div id="guidelineContent">
              <h5 className="guidelineContent">
                ● Only undergraduates of the University of Moratuwa are eligible
                for the workshop series. Students of the 23rd Batch are strongly
                encouraged to join.
              </h5>
              <h5 className="guidelineContent">
                ● Any student willing to participate must register using the
                link provided.
              </h5>
              <h5 className="guidelineContent">
                ● If a workshop session is to be held physically on campus, a
                student may attend the session physically in person, or
                virtually, by joining the online hybrid session.
              </h5>
              <h5 className="guidelineContent">
                ● Only students registered for the workshop series are eligible
                to compete in the mini hackathon.
              </h5>
              <h5 className="guidelineContent">
                ● Participants are required to have attended all sessions of the
                workshop series to be eligible to receive the e-Certificate of
                Completion of the workshop series.
              </h5>
            </div>
            <div id="guidelineBooklet">
              <div className="guidelineBookletdiv1">
                <h5 className="guidelineBookletdiv2">DOWNLOAD BOOKLET</h5>
                <img src={Cloud} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default App;
