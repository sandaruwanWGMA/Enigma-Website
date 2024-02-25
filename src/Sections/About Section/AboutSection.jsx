import React from "react";
import about_bg_img from "../../assets/Images-about-page/about bg image.png";
import about_bg_img_8_plus from "../../assets/Images-about-page/about-bg-8-plus.jpeg";
import floating_img from "../../assets/Images-about-page/about floating image.png";
import "./About Section Styles/AboutSectionStyles.css";

function AboutSection(props) {
  return (
    <section className="about" id="about">
      <img src={about_bg_img} alt="about bg image" className="about-bg-img" />
      <img
        src={about_bg_img_8_plus}
        alt="about bg image2"
        className="about-bg-img-8-plus"
      />
      <div className="img-overlay"></div>
      <div className="content">
        <div className="title">
          <p className="title-text">WHAT IS ENIGMA</p>
        </div>
        <div className="description">
          <p>
            ENIGMA ‘24 is a novel initiative pioneered by the Mathematics
            Society of the University of Moratuwa, that comprises an
            intra-university programming competition, open to all undergraduates
            of the university.
          </p>
          {/* <ul>
            <li>
              A six-week workshop series, focusing on Python Programming and
              Mathematics, aimed specifically at the 23rd Batch of University of
              Moratuwa (but open to all undergraduates), and
            </li>
            <li>
              A hackathon comprising two rounds, open to all undergraduates
              within the university.
            </li>
          </ul> */}
          <p>
            This stands as an unparalleled opportunity for participants to
            confront programming challenges woven intricately into mathematics,
            providing them an opportunity to deepen their knowledge of both
            subjects at the same time.
          </p>
          <p>
            ENIGMA ‘24 will set its participants on an exciting journey, where
            they will refine their programming skills, enhance their
            problem-solving skills through the application of mathematical
            concepts, and foster their teamwork skills, all of which are
            integral competencies required in today’s competitive landscape.
          </p>
        </div>
      </div>
      <img
        src={floating_img}
        alt="floating image"
        className="floating-img"
      ></img>
    </section>
  );
}

export default AboutSection;
