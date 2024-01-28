import React from "react";
import SovietTroops from "./assets/EventTimeline/SovietTroops.png";
import Rectangle_19 from "./assets/EventTimeline/Rectangle_19.png";
import dotline from "./assets/EventTimeline/dotline.png";
import airplaneBig from "./assets/EventTimeline/airplaneBig.png";
import airplaneSmall from "./assets/EventTimeline/airplaneSmall.png";
import missile from "./assets/EventTimeline/missile.png";
import dotlineDark from "./assets/EventTimeline/dotlineDark.png";
import "./App.css";

const App = () => {
  return (
    <div className="frame">
      <div className="div5"></div>
      <div className="div4"></div>

      <div className="div3"></div>

      <div className="div2"></div>

      <div className="div1"></div>
      <div className="div6"></div>
      <img src={SovietTroops} alt="Soviet Troops" className="SovietTroops" />
    </div>
  );
};

export default App;
