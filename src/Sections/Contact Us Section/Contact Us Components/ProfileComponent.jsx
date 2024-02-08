import React from "react";
import "../Contact Us Styles/ProfileComponent.css";

function ProfileComponent({
  profileImg,
  first_name,
  last_name,
  role,
  number,
  email,
}) {
  return (
    <div className="profile-container">
      <img src={profileImg} alt="profile" className="profile-img" />
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