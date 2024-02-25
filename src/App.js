import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterNow from "./Sections/RegisterNow/RegisterNow";
import HomeSection from "./Sections/Home Section/HomeSection";
import FullPageScrolling from "./ReactFullPageScroll";
import ImageComponent from "./Sections/Contact Us/Contact Us Components/ImageComponent";
import pb from "./assets/images-contact-us/member_board.png";
import vinu from "./assets/images-contact-us/VINU_.png";
import ContactUs from "./Sections/Contact Us/ContactUs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FullPageScrolling />} />
        <Route path="/RegisterNow" element={<RegisterNow />} />
      </Routes>
    </Router>
  );
};

export default App;
