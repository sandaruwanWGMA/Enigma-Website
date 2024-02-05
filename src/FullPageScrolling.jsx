import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import HomeSection from "./sections/Home Section/HomeSection";
import AboutSection from "./sections/About Section/AboutSection";
import EventTimeline from "./sections/EventTimeline/EventTimeline";
import Guidelines from "./sections/Guidelines/Guidelines";
import Accordition from "./sections/FAQ/Accordition";
import AwardSection from "./sections/AwardSection/AwardSection";
import OfficialPartners from "./sections/Official Partners/OfficialPartners";

function FullPageScrolling(props) {
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection style={{ height: "100vh" }} transitionTime={200}>
          <HomeSection></HomeSection>
        </FullpageSection>
        <FullpageSection style={{ height: "100vh" }} transitionTime={50}>
          <AboutSection></AboutSection>
        </FullpageSection>{" "}
        <FullpageSection style={{ height: "100vh" }} transitionTime={50}>
          <EventTimeline></EventTimeline>
        </FullpageSection>{" "}
        <FullpageSection style={{ height: "100vh" }} transitionTime={50}>
          <Guidelines></Guidelines>
        </FullpageSection>{" "}
        <FullpageSection style={{ height: "100vh" }} transitionTime={50}>
          <OfficialPartners></OfficialPartners>
        </FullpageSection>
        <FullpageSection style={{ height: "100vh" }} transitionTime={50}>
          <AwardSection></AwardSection>
        </FullpageSection>
        <FullpageSection style={{ height: "100vh" }} transitionTime={50}>
          <Accordition></Accordition>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}

export default FullPageScrolling;
