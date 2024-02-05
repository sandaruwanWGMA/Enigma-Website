import React from "react";
import "./App.css";
import Guidelines from "./Sections/Guidelines/Guidelines.jsx";
import EventTimeline from "./Sections/EventTimeline/EventTimeline.jsx";
import ContactUs from "./Sections/ContactUs/ContactUs.jsx";

const App = () => {
  return (
    <section>
      <EventTimeline></EventTimeline>
      <Guidelines></Guidelines>
      <ContactUs></ContactUs>
    </section>
  );
};

export default App;
