import React from "react";
import ProfileComponent from "./Contact Us Components/ProfileComponent";
import fingers from "../../assets/images-contact-us/fingers.svg";
import notice_board from "../../assets/images-contact-us/notice board.png";
import notice_board_mobile from "../../assets/images-contact-us/notice-board-mobile.png";
import personBoard from "../../assets/images-contact-us/member_board.png";
import janeesha from "../../assets/images-contact-us/JANEESHA_.png";
import vinu from "../../assets/images-contact-us/VINU_.png";
import methma from "../../assets/images-contact-us/METHMA_.png";
import sasnika from "../../assets/images-contact-us/SASNIKA_.png";
import eagle from "../../assets/images-contact-us/eagle sign.svg";
import "./Contact Us Styles/ContactUs.css";

function ContactUs(props) {
  return (
    <section className="contactus-sec" id="contact">
      <img className="fingers" src={fingers}></img>
      <p className="contactus-title">CONTACT US</p>
      <div className="shadow"></div>
      <div className="profile-sec">
        <img src={notice_board} className="notice-board" alt="board"></img>
        <img
          src={notice_board_mobile}
          className="notice-board-mobile"
          alt="board"
        ></img>
        <img src={eagle} className="eagle" alt="eagle"></img>
        <div className="profile-com-set">
          <ProfileComponent
            personBoard={personBoard}
            person={janeesha}
            first_name={"Janeesha"}
            last_name={"wickramasinghe"}
            role={"Enigma'24 Chair Person"}
            number={"+94 77 621 2186"}
            email={"wickramasinghejj.21@uom.lk"}
          ></ProfileComponent>
          <ProfileComponent
            personBoard={personBoard}
            person={vinu}
            first_name={"Vinu"}
            last_name={"Kaveesha"}
            role={"Enigma'24 Chair Person"}
            number={"+94 76 499 7265"}
            email={"dezoysapvk.21@uom.lk"}
          ></ProfileComponent>
          <ProfileComponent
            personBoard={personBoard}
            person={methma}
            first_name={"Methma"}
            last_name={"Weragoda"}
            role={"Enigma'24 Chair Person"}
            number={"+94 71 959 3024"}
            email={"weragoda.21@uom.lk"}
          ></ProfileComponent>
          <ProfileComponent
            personBoard={personBoard}
            person={sasnika}
            first_name={"Sasnika"}
            last_name={"Suhan"}
            role={"HR & Delegates Pilar Lead"}
            number={"+94 74 122 4726"}
            email={"wadugess.21@uom.lk"}
          ></ProfileComponent>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
