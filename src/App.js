import React from "react";
import "./App.css";
import HomeSection from "./Sections/Home Section/HomeSection.jsx";
import Guidelines from "./Sections/Guidelines/Guidelines.jsx";
import EventTimeline from "./Sections/EventTimeline/EventTimeline.jsx";
import ContactUs from "./Sections/ContactUs/ContactUs.jsx";

const App = () => {
  return (
    <>
      <HomeSection></HomeSection>
      <EventTimeline></EventTimeline>
      <Guidelines></Guidelines>
      <ContactUs></ContactUs>
    </>
  );
};

export default App;
