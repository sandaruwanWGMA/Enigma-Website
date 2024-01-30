import React from "react";
import home_bg_img from "./assets/home_bg_img.jpeg";
import enigmaLogo from "./assets/enigma_logo.svg";
import "./App.css";
import CountdownTimer from "./components/CountdownTimer";
import NavBar from "./components/NabBar";
import "./components/VerticalLine.css";
import "./components/SocialIcons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import LinkedInSVG from "./assets/social media/LinkedInSVG";

const App = () => {
  return (
    <section id="home" className="home-section">
      <NavBar
        style={{
          position: "absolute",
          right: "10em",
        }}
      ></NavBar>
      <div className="social-media">
        <div className="vertical-line"></div>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInSVG width={48} height={48}></LinkedInSVG>
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            style={{
              color: "white",
            }}
          />
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
    </section>
  );
};

export default App;
