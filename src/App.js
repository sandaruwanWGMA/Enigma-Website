import React, { useRef } from "react";
import HomeSection from "./Sections/Home Section/HomeSection";
import AboutSection from "./Sections/About Section/AboutSection";
import Accordition from "./Sections/FAQ/Accordition";

const App = () => {
  return (
    <>
      <HomeSection></HomeSection>
      <AboutSection></AboutSection>
      <Accordition />
    </>
  );
};
export default App;
