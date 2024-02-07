import React, { useRef } from "react";
import home_bg_img from "../../assets/Images-home-page/home_bg_img.jpeg";
import home_bg_8_plus from "../../assets/Images-home-page/home-bg-iphone8plus.jpeg";
import enigmaLogo from "../../assets/Images-home-page/enigma_logo.svg";
import "../Home Section/Home Section Styles/VerticalLine.css";
import "../Home Section/Home Section Styles/SocialIcons.css";
import { ReactComponent as FacebookIcon } from "../../assets/Images-home-page/facebook-icon.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/Images-home-page/linkedin-icon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/Images-home-page/instagram-icon.svg";
import { ReactComponent as Enigma } from "../../assets/Images-home-page/Enigma.svg";
import fb_icon from "../../assets/Images-home-page/fb.png";
import EnigmaMobile from "../../assets/Images-home-page/enigma mobile.svg";
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
        <img src={EnigmaMobile} className="enigma-mobile" alt="e2"></img>
        <Enigma className="enigma"></Enigma>
        <NavBar
          scrollToAbout={scrollToAbout}
          style={{
            position: "absolute",
            top: "10px",
            right: "4em",
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
          <LinkedInIcon className="linkedin-icon icon" />
          {/* <img
            src={LinkedInIconi}
            alt="linkedin-icon"
            className="linkedin-icon"
          /> */}
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook-icon"
        >
          <FacebookIcon className="facebook-icon icon" />
          {/* <img src={fb_icon} alt="facebook-icon" className="facebook-icon" /> */}
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-icon"
        >
          <InstagramIcon className="instagram-icon icon" />
          {/* <img src={InstagramIconi}></img> */}
        </a>
      </div>
      <div className="image-overlay"></div>
      <img src={home_bg_img} alt="home-bg-image" className="home-bg-img" />
      <img
        src={home_bg_8_plus}
        alt="home-bg-image-8-plus"
        className="home-bg-img-8-plus"
      />
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
