import React from "react";
import "./Footer Styles/FooterSection.css";
import MoraMathIcon from "../../assets/footer-page/Mora Maths- Vertical logo.svg";

function FooterSection(props) {
  return (
    <div className="footer-sec">
      <div className="footer-container">
        <div className="title-container">
          <p className="footer-title">ENIGMA</p>
          <div className="h-line"></div>
        </div>
        <p className="description-f">Intra-University Hackathon organized by</p>
        <img src={MoraMathIcon} />
        <a className="more-info">
          <span>CLICK HERE FOR MORE INFO</span>
        </a>
        <p className="copyright">Copyright © 2023 FOC</p>
      </div>
    </div>
  );
}

export default FooterSection;
