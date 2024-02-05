import React from "react";
import ContactUsBackgroungImg from "../../assets/ContactUs/ContactUs.svg";
import ContactUsBackgroungMobile from "../../assets/ContactUs/ContactUsMobile.svg";
import "./ContactUsStyles/ContactUs.css";

function ContactUs(props) {
  return (
    <section>
      <div className="ContactUs">
        <img src={ContactUsBackgroungImg} alt="" className="contactUs" />
        <div className="ContactUsTopic">
          <h1 id="contactUsTopic">Contact Us</h1>
        </div>
      </div>
      <div className="ContactUsMobile">
        <img
          src={ContactUsBackgroungMobile}
          alt=""
          className="contactUsMobile"
        />
        <div className="ContactUsTopicMobile">
          <h1 id="contactUsTopicMobile">Contact Us</h1>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
