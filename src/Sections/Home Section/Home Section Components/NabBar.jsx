import React, { useState } from "react";
import "../Home Section Styles/NavBar.css";
import "../Home Section Styles/HorizontalLine.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as LinkedInIcon } from "../../../assets/Images-home-page/linkedin-icon.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/Images-home-page/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "../../../assets/Images-home-page/instagram-icon.svg";

const NavBar = ({ style, scrollToAbout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const flipIsOpen = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button className="toggle-btn" onClick={flipIsOpen}>
        <p>{isOpen ? "╳" : "☰"}</p>
      </button>
      <nav className={isOpen ? `mobile` : `mobile-not`}>
        <p className="titile-nav-mob">ENIGMA ˈ24</p>
        <a href="#home" className="nav-links">
          Home
        </a>
        <a href="#about" className="nav-links">
          About
        </a>
        <a href="#timeline" className="nav-links">
          Timeline
        </a>
        <a href="#guidelines" className="nav-links">
          Guidelines
        </a>
        <a href="#awards" className="nav-links">
          Awards
        </a>
        <a href="#contact" className="nav-links">
          Contact Us
        </a>
        <a href="#faq" className="nav-links">
          FAQ
        </a>
        {/* <a onClick={scrollToAbout} href="#more" className="nav-links">
          More{" "}
          <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: "0.9em" }} />
        </a> */}
        <div className="bottom-box">
          <div className="horizontal-line"></div>
          <div className="social-icons-mob">
            <a
              href="https://www.linkedin.com/company/uommaths/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-icon"
            >
              <LinkedInIcon className="linkedin-icon icon-mob" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100090785496427&sfnsn=wa&mibextid=RUbZ1f"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook-icon"
            >
              <FacebookIcon className="facebook-icon icon-mob" />
            </a>
            <a
              href="https://www.instagram.com/moramath.uom?igsh=YWRnZHQ2enRvM2F0"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-icon"
            >
              <InstagramIcon className="instagram-icon icon-mob" />
            </a>
          </div>
        </div>
      </nav>
      <nav style={style} className={isOpen ? "open-m" : "navigation"}>
        <a href="#home_" className="nav-links">
          Home
        </a>
        <a href="#about_" className="nav-links">
          About
        </a>
        <a href="#timeline_" className="nav-links">
          Timeline
        </a>
        <a href="#guidelines_" className="nav-links">
          Guidelines
        </a>
        <a href="#awards_" className="nav-links">
          Awards
        </a>
        <a href="#contact_" className="nav-links">
          Contact Us
        </a>
        <a href="#faq_" className="nav-links">
          FAQ
        </a>
        {/* <a onClick={scrollToAbout} href="#more">
          More{" "}
          <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: "0.9em" }} />
        </a> */}
      </nav>
    </>
  );
};

export default NavBar;
