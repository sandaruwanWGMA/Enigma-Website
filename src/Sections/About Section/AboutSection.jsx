import React from "react";
import about_bg_img from "../../assets/Images-about-page/about bg image.png";
import "./About Section Styles/AboutSectionStyles.css";

function AboutSection(props) {
  return (
    <section>
      <img src={about_bg_img} alt="about bg image" className="about-bg-img" />
    </section>
  );
}

export default AboutSection;
