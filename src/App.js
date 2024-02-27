import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterNow from "./Sections/RegisterNow/RegisterNow";
import FullPageScrolling from "./ReactFullPageScroll";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<FullPageScrolling />} />
        <Route path="/RegisterNow" element={<RegisterNow />} />
      </Routes>
    </Router>
  );
};

export default App;
