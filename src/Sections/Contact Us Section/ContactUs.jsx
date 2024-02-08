import React from "react";
import ProfileComponent from "./Contact Us Components/ProfileComponent";
import notice_board from "../../assets/images-contact-us/notice board.png";
import janeesha from "../../assets/images-contact-us/janeesha.png";
import vinu from "../../assets/images-contact-us/vinu.png";
import methma from "../../assets/images-contact-us/methma.png";
import sasnika from "../../assets/images-contact-us/sasnika.png";
import "./Contact Us Styles/ContactUs.css";

function ContactUs(props) {
  return (
    <section>
      <div profile-sec>
        <img src={notice_board}></img>
        <div className="profile-com-set">
          <ProfileComponent
            profileImg={janeesha}
            first_name={"Vinu"}
            last_name={"Kaveesha"}
            role={"Enigma'24 Chair Person"}
            number={"+94 77 621 2186"}
            email={"wickramasinghejj.21@uom.lk"}
          ></ProfileComponent>
          <ProfileComponent
            profileImg={vinu}
            first_name={"Vinu"}
            last_name={"Kaveesha"}
            role={"Enigma'24 Chair Person"}
            number={"+94 77 621 2186"}
            email={"wickramasinghejj.21@uom.lk"}
          ></ProfileComponent>
          <ProfileComponent
            profileImg={methma}
            first_name={"Vinu"}
            last_name={"Kaveesha"}
            role={"Enigma'24 Chair Person"}
            number={"+94 77 621 2186"}
            email={"wickramasinghejj.21@uom.lk"}
          ></ProfileComponent>
          <ProfileComponent
            profileImg={sasnika}
            first_name={"Vinu"}
            last_name={"Kaveesha"}
            role={"Enigma'24 Chair Person"}
            number={"+94 77 621 2186"}
            email={"wickramasinghejj.21@uom.lk"}
          ></ProfileComponent>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
