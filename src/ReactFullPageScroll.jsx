import React, { useState, useEffect } from "react";
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
import NavBar from "./Sections/Home Section/Home Section Components/NabBar";

const ReactFullPageScroll = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust threshold as needed
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const id = hash.substr(1); // Remove the '#' at the start
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Clean up on unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  if (isMobile) {
    // Render sections directly without full-page scrolling on mobile
    return (
      <div>
        <HomeSection id="home" />
        <AboutSection id="about" />
        <EventTimeline id="timeline" />
        <Guidelines id="guidelines" />
        <OfficialPartners id="partners" />
        <AwardSection id="awards" />
        <ContactUs id="contact" />
        <Accordition id="faq" />
        <FooterSection id="footer" />
      </div>
    );
  }

  // Render ReactFullpage component for desktop
  const SEL = "custom-section";
  const SECTION_SEL = `.${SEL}`;

  const pluginWrapper = () => {
    // Include any fullpage.js extensions/plugins here
  };

  const fullpages = [
    { component: <HomeSection /> },
    { component: <AboutSection /> },
    { component: <EventTimeline /> },
    { component: <Guidelines /> },
    { component: <OfficialPartners /> },
    { component: <AwardSection /> },
    { component: <ContactUs /> },
    { component: <Accordition /> },
    { component: <FooterSection /> },
  ];

  const onLeave = (origin, destination, direction) => {
    console.log("onLeave", { origin, destination, direction });
  };

  return (
    <div className="">
      <ReactFullpage
        debug /* Debug logging */
        pluginWrapper={pluginWrapper}
        navigation
        anchors={[
          "home_",
          "about_",
          "timeline_",
          "guidelines_",
          "partners_",
          "awards_",
          "contact_",
          "faq_",
          "footer_",
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
