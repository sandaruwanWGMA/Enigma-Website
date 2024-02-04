import React from "react";
import "./NavMobile.css";

function NavMobile(props) {
  return (
    <div>
      <div className="nav-mobile">
        <div className="nav-mobile-links">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#workshops">Workshops</a>
            </li>
            <li>
              <a href="#hackathon">Hackathon</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavMobile;
