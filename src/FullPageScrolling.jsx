import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import HomeSection from "./Sections/Home Section/HomeSection";
import AboutSection from "./Sections/About Section/AboutSection";
import EventTimeline from "./Sections/EventTimeline/EventTimeline";
import Guidelines from "./Sections/Guidelines/Guidelines";
import Accordition from "./Sections/FAQ/Accordition";
import OfficialPartners from "./Sections/Official Partners/";

function FullPageScrolling(props) {
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection style={{ height: "100vh" }}>
          <HomeSection></HomeSection>
        </FullpageSection>
        <FullpageSection style={{ height: "100vh" }}>
          <AboutSection></AboutSection>
        </FullpageSection>{" "}
        <FullpageSection style={{ height: "100vh" }}>
          <EventTimeline></EventTimeline>
        </FullpageSection>{" "}
        <FullpageSection style={{ height: "100vh" }}>
          <Guidelines></Guidelines>
        </FullpageSection>{" "}
        <FullpageSection style={{ height: "100vh" }}>
          <OfficialPartners></OfficialPartners>
        </FullpageSection>
        <FullpageSection style={{ height: "100vh" }}>
          <Accordition></Accordition>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}

export default FullPageScrolling;
