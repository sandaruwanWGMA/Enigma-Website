import React from "react";
<<<<<<< HEAD
import SovietTroops from "../../assets/EventTimeline/SovietTroops.svg";
import Group from "../../assets/EventTimeline/Group.svg";
=======
import Timeline from "../../assets/EventTimeline/timeline.svg";
>>>>>>> 7631b9bb229fd4d2debdb1bd4bf12c2cf9a12383
import "./EventTimelineStyles/EventTimeline.css";

function EventTimeline(props) {
  return (
    <section>
<<<<<<< HEAD
      <div className="frame">
        <div className="div5"></div>
        <div className="div4"></div>
        <div className="div3"></div>
        <div className="div2"></div>
        <div className="div1"></div>
        <div className="div6"></div>
        <img src={SovietTroops} alt="Soviet Troops" className="SovietTroops" />

        <div className="Group">
          <img src={Group} alt="" />
        </div>

        <div className="eventTimeline">
          <h1 id="eventTimeline">Event TimeLine</h1>
        </div>

        <div className="spotsDev">
          <div className="RegOp">
            <h3 className="text1">Registration Opening</h3>
            <h5 className="text2">18th FEB</h5>
          </div>

          <div className="RegClo">
            <h3 className="text3">Registration Closing</h3>
            <h5 className="text4">26th FEB</h5>
          </div>

          <div className="Ro1">
            <h5 className="text5">16th MARCH</h5>
            <h3 className="text6">1st Round (virtual)</h3>
          </div>

          <div className="TeamAnn">
            <h3 className="text7">Team Announcement</h3>
            <h5 className="text8">20th MARCH</h5>
          </div>

          <div className="FinalRo">
            <h5 className="text9">30th MARCH</h5>
            <h3 className="text10">Final Round(Physical)</h3>
          </div>

          <div className="AwardCer">
            <h5 className="text11">30th MARCH</h5>
            <h3 className="text12">Awarding Ceremony</h3>
          </div>
        </div>
=======
      <div className="Timeline">
        <img src={Timeline} alt="" className="timeline" />
        <div className="eventTimeline">
          <h1 id="eventTimeline">Event TimeLine</h1>
        </div>
>>>>>>> 7631b9bb229fd4d2debdb1bd4bf12c2cf9a12383
      </div>
    </section>
  );
}

export default EventTimeline;
