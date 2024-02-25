import React from "react";
import "../Contact Us Styles/ProfileComponent.css";
import ImageComponent from "./ImageComponent";

function ProfileComponent({
  personBoard,
  person,
  first_name,
  last_name,
  role,
  number,
  email,
}) {
  return (
    <div className="profile-container">
      <div className="profile-img">
        <img src={personBoard} className="person-board"></img>
        <img src={person} className="person"></img>
      </div>{" "}
      <div className="profile-details">
        <p className="first-name name">{first_name}</p>
        <p className="last-name name">{last_name}</p>
        <p className="role info">{role}</p>
        <p className="number info">{number}</p>
        <p className="email info">{email}</p>
      </div>
    </div>
  );
}

export default ProfileComponent;
