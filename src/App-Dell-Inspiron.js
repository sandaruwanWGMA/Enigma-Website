import React from "react";
import "./App.css";
import Guidelines from "./Sections/Guidelines/Guidelines.jsx";
import EventTimeline from "./Sections/EventTimeline/EventTimeline.jsx";

const App = () => {
  return (
    <section>
      <EventTimeline></EventTimeline>
      <Guidelines></Guidelines>
    </section>
  );
};
export default App;
