import React, { useRef } from "react";
import HomeSection from "./Sections/Home Section/HomeSection";
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
