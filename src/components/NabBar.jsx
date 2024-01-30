import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ style }) => {
  return (
    <nav style={style}>
      <a href="#home">Home</a>
      <a href="#guidelines">Guidelines</a>
      <a href="#contact">Contact Us</a>
      <a href="#more">
        More{" "}
        <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: "0.9em" }} />
      </a>
    </nav>
  );
};

export default NavBar;
