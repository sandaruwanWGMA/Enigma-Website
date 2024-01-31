import React, { useRef } from "react";
import HomeSection from "./Sections/Home Section/HomeSection";
import AboutSection from "./Sections/About Section/AboutSection";
import Accordition from "./Sections/FAQ/Accordition";
import Guidelines from "./Sections/Guidelines/Guidelines.jsx";
import EventTimeline from "./Sections/EventTimeline/EventTimeline.jsx";

const App = () => {
  return (
    <div>
      <HomeSection></HomeSection>
      <AboutSection></AboutSection>
      <EventTimeline></EventTimeline>
      <Guidelines></Guidelines>
      <Accordition />
    </div>
  );
};
export default App;
