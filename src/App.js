import React from "react";
import home_bg_img from "./assets/home_bg_img.jpeg";
import enigmaLogo from "./assets/enigma_logo.svg";
import "./App.css";
import CountdownTimer from "./components/CountdownTimer";
import NavBar from "./components/NabBar";
import "./components/VerticalLine.css";
import "./styles/SocialIcons.css";
import { ReactComponent as FacebookIcon } from "./assets/facebook-icon.svg";
import { ReactComponent as LinkedInIcon } from "./assets/linkedin-icon.svg";
import { ReactComponent as InstagramIcon } from "./assets/instagram-icon.svg";
import { ReactComponent as Enigma } from "./assets/Enigma.svg";
import rectangle from "./assets/Rectangle 1.png";

const App = () => {
  return (
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
  );
};

export default App;
