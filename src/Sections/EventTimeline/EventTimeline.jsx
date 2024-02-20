import React from "react";
import TimelineMobile from "../../assets/EventTimeline/EventTimelineMobile.svg";
import Timeline475 from "../../assets/EventTimeline/timeline475.svg";
import Timeline600 from "../../assets/EventTimeline/timeline600.svg";
import Timeline768 from "../../assets/EventTimeline/timeline768.svg";
import Timeline992 from "../../assets/EventTimeline/timeline992.svg";
import Timeline1200 from "../../assets/EventTimeline/timeline1200.svg";
import Timeline1094 from "../../assets/EventTimeline/timeline1094.svg";

import iphone12pro from "../../assets/EventTimeline/iPhone12pro.svg";
import iphone12promax from "../../assets/EventTimeline/iPhone12promax.svg";
import "./EventTimelineStyles/EventTimeline.css";

function EventTimeline(props) {
  return (
    <section id="timeline">
      <div className="Timeline">
        <img src={Timeline475} alt="" className="timeline475" />
        <img src={Timeline600} alt="" className="timeline600" />
        <img src={Timeline768} alt="" className="timeline768" />
        <img src={Timeline992} alt="" className="timeline992" />
        <img src={Timeline1094} alt="" className="timeline1094" />
        <img src={Timeline1200} alt="" className="timeline1200" />

        <div className="eventTimeline">
          <h1 id="eventTimeline">Event TimeLine</h1>
        </div>
      </div>
      <div className="TimelineMobile">
        <img src={iphone12pro} alt="" className="iphone12pro" />
        <img src={iphone12promax} alt="" className="iphone12promax" />
        <img src={TimelineMobile} alt="" className="timelineMobile" />
        <div className="eventTimelineMobile">
          <h1 id="eventTimelineMobile">Event TimeLine</h1>
        </div>
      </div>
    </section>
  );
}

export default EventTimeline;
