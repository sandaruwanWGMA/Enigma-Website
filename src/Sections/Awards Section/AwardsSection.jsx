import React from "react";
import bg_img from "../../assets/awards-page/Rectangle 22.png";
import floating_pic from "../../assets/awards-page/flag-img.png";
import army_man from "../../assets/awards-page/Army-man.png";
import awards from "../../assets/awards-page/Awards.png";
import "./Awards Section Styles/AwardsSection.css";

function AwardsSection(props) {
  return (
    <section className="awards-sec">
      <img src={bg_img} alt="background" className="bg-img-awards"></img>
      <img src={floating_pic} alt="flag" className="flag-img"></img>
      <img src={army_man} alt="army-man" className="army-man"></img>
      <img src={awards} alt="awards" className="awards"></img>
    </section>
  );
}

export default AwardsSection;
