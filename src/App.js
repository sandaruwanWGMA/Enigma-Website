import React, { useRef } from "react";
import HomeSection from "./Sections/Home Section/HomeSection";
import AboutSection from "./Sections/About Section/AboutSection.jsx";
import Guidelines from "./Sections/Guidelines/Guidelines.jsx";
import EventTimeline from "./Sections/EventTimeline/EventTimeline.jsx";
import Accordition from "./Sections/FAQ/Accordition.jsx";

const App = () => {
  return (
    <section>
      <HomeSection></HomeSection>
      <AboutSection />
      <EventTimeline></EventTimeline>
      <Guidelines></Guidelines>
      <Accordition />
    </section>
  );
};
export default App;
