import React from "react";
import { ReactComponent as BGImage } from "../../assets/official-partners-page/vintage-world-war.svg";
import "./Official Partners Styles/OfficialParterns.css";

function OfficialPartners(props) {
  return (
    <section className="official-partners-section">
      <BGImage className="bg-world-war" />
    </section>
  );
}

export default OfficialPartners;
