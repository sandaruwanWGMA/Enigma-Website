import React, { useRef } from "react";
import home_bg_img from "../../assets/Images-home-page/home_bg_img.jpeg";
import enigmaLogo from "../../assets/Images-home-page/enigma_logo.svg";
import "../Home Section/Home Section Styles/VerticalLine.css";
import "../Home Section/Home Section Styles/SocialIcons.css";
import { ReactComponent as FacebookIcon } from "../../assets/Images-home-page/facebook-icon.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/Images-home-page/linkedin-icon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/Images-home-page/instagram-icon.svg";
import { ReactComponent as Enigma } from "../../assets/Images-home-page/Enigma.svg";
import rectangle from "../../assets/Images-home-page/Rectangle 1.png";
import "./Home Section Styles/HomeStyles.css";
import CountdownTimer from "./Home Section Components/CountdownTimer";
import NavBar from "./Home Section Components/NabBar";

function HomeSection(props) {
  const aboutSectionRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="home" className="home-section">
      <div className="nav-bar">
        <Enigma className="enigma"></Enigma>
        <NavBar
          scrollToAbout={scrollToAbout}
          style={{
            position: "absolute",
            right: "10em",
            zIndex: 1,
          }}
        />
      </div>
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
}

export default HomeSection;
