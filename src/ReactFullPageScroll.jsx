// ReactFullPageScroll.jsx

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import HomeSection from "./Sections/Home Section/HomeSection";
import AboutSection from "./Sections/About Section/AboutSection";
import EventTimeline from "./Sections/EventTimeline/EventTimeline";
import Guidelines from "./Sections/Guidelines/Guidelines";
import OfficialPartners from "./Sections/Official Partners/OfficialPartners";
import AwardSection from "./Sections/AwardSection/AwardSection";
import Accordition from "./Sections/FAQ/Accordition";
import FooterSection from "./Sections/Footer Section/FooterSection";
import ContactUs from "./Sections/Contact Us/ContactUs";

const ReactFullPageScroll = () => {
  const SEL = "custom-section";
  const SECTION_SEL = `.${SEL}`;

  // NOTE: if using fullpage extensions/plugins put them here and pass it as props.
  const pluginWrapper = () => {
    /*
     * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
     */
  };

  const fullpages = [
    {
      component: <HomeSection />,
    },
    {
      component: <AboutSection />,
    },
    {
      component: <EventTimeline />,
    },
    {
      component: <Guidelines />,
    },
    {
      component: <OfficialPartners />,
    },
    {
      component: <AwardSection />,
    },
    {
      component: <ContactUs></ContactUs>,
    },
    {
      component: <Accordition />,
    },
    {
      component: <FooterSection></FooterSection>,
    },
    // Add more sections as needed
  ];

  const onLeave = (origin, destination, direction) => {
    console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  };

  return (
    <div className="">
      <ReactFullpage
        debug /* Debug logging */
        // Required when using extensions
        pluginWrapper={pluginWrapper}
        // fullpage options
        navigation
        anchors={[
          "home",
          "about",
          "timeline",
          "guidelines",
          "partners",
          "awards",
          "contact",
          "faq",
          "footer",
        ]}
        sectionSelector={SECTION_SEL}
        onLeave={onLeave}
        scrollingSpeed={700}
        scrollOverflow={false}
        render={(comp) => (
          <ReactFullpage.Wrapper>
            {fullpages.map((section, index) => (
              <div
                key={index}
                className={SEL}
                style={{
                  height: "100vh",
                  width: "100vw",
                  overflow: "hidden",
                }}
              >
                {section.component}
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default ReactFullPageScroll;
