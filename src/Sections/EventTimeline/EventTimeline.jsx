import React from "react";
import Timeline from "../../assets/EventTimeline/timeline.svg";
import TimelineMobile from "../../assets/EventTimeline/EventTimelineMobile.svg";
import "./EventTimelineStyles/EventTimeline.css";

function EventTimeline(props) {
  return (
    <section>
      <div className="Timeline">
        <img src={Timeline} alt="" className="timeline" />
        <div className="eventTimeline">
          <h1 id="eventTimeline">Event TimeLine</h1>
        </div>
      </div>
      <div className="TimelineMobile">
        <img src={TimelineMobile} alt="" className="timelineMobile" />
        <div className="eventTimelineMobile">
          <h1 id="eventTimelineMobile">Event TimeLine</h1>
        </div>
      </div>
    </section>
  );
}

export default EventTimeline;
