import React from "react";
import about_bg_img from "../../assets/Images-about-page/about bg image.png";
import floating_img from "../../assets/Images-about-page/about floating image.png";
import "./About Section Styles/AboutSectionStyles.css";

function AboutSection(props) {
  return (
    <section id="about" style={{ height: "100vh" }} className="slides">
      <img src={about_bg_img} alt="about bg image" className="about-bg-img" />
      <div className="img-overlay"></div>
      <div className="content">
        <div className="title">
          <p className="title-text">WHAT IS ENIGMA</p>
        </div>
        <div className="description">
          <p>
            Enigma is an intra-university coding competition organized by
            MoraMaths, consisting of
          </p>
          <ul>
            <li>
              A six-week workshop series, focusing on Python Programming and
              Mathematics, aimed specifically at the 23rd Batch of University of
              Moratuwa (but open to all undergraduates), and
            </li>
            <li>
              A hackathon comprising two rounds, open to all undergraduates
              within the university.
            </li>
          </ul>
          <p>
            Taking part in Enigma will not only leave you with strong skills in
            both mathematics and programming, but also offer you a view of
            mathematics from a different, previously unseen perspective, further
            igniting your passion for the subject.
          </p>
          <p>
            This will be an excellent opportunity for you to improve your
            problem-solving skills and gain a deeper understanding of
            mathematics and programming, and of course, have fun with your
            colleagues!
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
