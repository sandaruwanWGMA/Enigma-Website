import React from "react";
import "./App.css";
import Guidelines from "./Sections/Guidelines/Guidelines.jsx";
import EventTimeline from "./Sections/EventTimeline/EventTimeline.jsx";
import ContactUs from "./Sections/Contact Us/ContactUs.jsx";

const App = () => {
  return (
    <>
      <EventTimeline></EventTimeline>
      <Guidelines></Guidelines>
      <ContactUs></ContactUs>
    </>
  );
};

export default App;
