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
import AwardSection from "./Sections/AwardSection/AwardSection";
import OfficialPartners from "./Sections/Official Partners/OfficialPartners";

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
