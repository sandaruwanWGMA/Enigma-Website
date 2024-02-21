import React from "react";
import Accordition from "./Sections/FAQ/Accordition";
import HomeSection from "./Sections/Home Section/HomeSection";
import AboutSection from "./Sections/About Section/AboutSection";
import "./App.css";
import Guidelines from "./Sections/Guidelines/Guidelines.jsx";
import RegisterNow from "./Sections/RegisterNow/RegisterNow";
import EventTimeline from "./Sections/EventTimeline/EventTimeline.jsx";

const App = () => {
  return (
      <>
      <HomeSection></HomeSection>
      <AboutSection></AboutSection>
      <EventTimeline></EventTimeline>
      <Guidelines></Guidelines>
      <Accordition />
      <RegisterNow></RegisterNow>
      </>
  );
};
export default App;
