import React from "react";
import { ReactComponent as BGImage } from "../../assets/official-partners-page/vintage-world-war.svg";
import world_war from "../../assets/official-partners-page/vintage-world-war.svg";
import rec from "../../assets/official-partners-page/Rectangle 3.png";
import army_man from "../../assets/official-partners-page/Rectangle 4.png";
import dialog from "../../assets/official-partners-page/dialog logo.svg";
import wso2 from "../../assets/official-partners-page/WSO2 logo.svg";
import cisco from "../../assets/official-partners-page/Logo_Cisco.svg";
import huawei from "../../assets/official-partners-page/Logo_Huawei.svg";
import ICBS from "../../assets/official-partners-page/ICBS Transparent.png";
import charted from "../../assets/official-partners-page/the-institute-of-chartered-accountants-of-sri-lanka-ca-sri-lanka-vector-logo.svg";
import "./Official Partners Styles/OfficialParterns.css";

function OfficialPartners(props) {
  return (
    <section className="official-partners-section">
      <img src={world_war} className="bg-world-war"></img>
      {/* <BGImage className="bg-world-war" /> */}
      <img src={rec} alt="rectangle" className="rec"></img>
      <img src={army_man} alt="army man" className="army-man"></img>
      <div className="logos">
        <img src={charted} className="logo"></img>
        <img src={ICBS} className="logo"></img>
      </div>
      <span className="official-partners-title">OFFICIAL PARTNERS</span>
    </section>
  );
}

export default OfficialPartners;
