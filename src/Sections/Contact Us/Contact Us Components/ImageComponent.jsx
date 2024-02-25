import React from "react";
import "../Contact Us Styles/ImageComponent.css";
import "../Contact Us Styles/ProfileComponent.css";

function ImageComponent({ person_board, person, style }) {
  return (
    <div style={style} className="profile-img">
      <img src={person_board} className="person-board"></img>
      {/* <img src={person} className="person"></img> */}
    </div>
  );
}

export default ImageComponent;
