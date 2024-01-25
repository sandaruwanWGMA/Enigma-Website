import React from "react";
import home_bg_img from "./assets/home_bg_img.png";
import enigmaLogo from "./assets/enigma_logo.svg";
import "./App.css";
import CountdownTimer from "./components/CountdownTimer";

const App = () => {
  return (
    <section id="home" className="home-section">
      <img src={home_bg_img} alt="home-bg-image" className="home-bg-img" />
      <img src={enigmaLogo} alt="enigma-logo" className="enigma-logo" />
      <CountdownTimer
        style={{
          position: "absolute",
          top: "70%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></CountdownTimer>
    </section>
  );
};

export default App;
