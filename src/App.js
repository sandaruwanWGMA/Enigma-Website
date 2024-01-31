import React from "react";

import Accordition from "./Sections/FAQ/Accordition";
import React, { useRef } from "react";
import HomeSection from "./Sections/Home Section/HomeSection";
import AboutSection from "./Sections/About Section/AboutSection";
import "./App.css";
import Guidelines from "./Sections/Guidelines/Guidelines.jsx";
import EventTimeline from "./Sections/EventTimeline/EventTimeline.jsx";

const App = () => {
  return <Accordition />;
  return (
    <>
      <HomeSection></HomeSection>
      <AboutSection></AboutSection>
      <EventTimeline></EventTimeline>
      <Guidelines></Guidelines>
    </>
  );
};
export default App;
