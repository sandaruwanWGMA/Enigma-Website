import React from "react";
import "./App.css";
import HomeSection from "./Sections/HomeSection/HomeSection.jsx";
import Guidelines from "./Sections/Guidelines/Guidelines.jsx";
import EventTimeline from "./Sections/EventTimeline/EventTimeline.jsx";

const App = () => {
  return (
    <section>
      <HomeSection></HomeSection>
      <EventTimeline></EventTimeline>
      <Guidelines></Guidelines>
    </section>
  );
};
export default App;
