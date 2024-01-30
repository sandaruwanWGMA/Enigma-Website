import React from "react";
import SovietTroops from "./assets/EventTimeline/SovietTroops.png";
import airplaneBig from "./assets/EventTimeline/Group35.png";
import guidelineBackground from "./assets/Guidelines/guidelineBackground.svg";
import soldier from "./assets/Guidelines/soldier.svg";
import Cloud from "./assets/Guidelines/Cloud.svg";
import "./App.css";

const App = () => {
  return (
    <section id="timeline">
      <div className="frame">
        <div className="div5"></div>
        <div className="div4"></div>

        <div className="div3"></div>

        <div className="div2"></div>

        <div className="div1"></div>
        <div className="div6"></div>
        <img src={SovietTroops} alt="Soviet Troops" className="SovietTroops" />

        <div className="airplaneBig">
          <img src={airplaneBig} alt="airplaneBig" />
        </div>
        <div className="eventTimeline">
          <h1 id="eventTimeline">Event TimeLine</h1>
        </div>
      </div>

      <div className="guideline">
        <img
          className="backgroundImg"
          src={guidelineBackground}
          alt="guidelineBackground"
        />
        <div className="guidelinePicture">
          <img src={soldier} alt="guidelineBackground" />
        </div>
        <div className="guidelineTexts">
          <div className="guidelineTopic">
            <h1 id="guidelineTopic">Guidelines</h1>
          </div>
          <div id="guidelineContent">
            <h5 className="guidelineContent">
              ● Only undergraduates of the University of Moratuwa are eligible
              for the workshop series. Students of the 23rd Batch are strongly
              encouraged to join.
            </h5>
            <h5 className="guidelineContent">
              ● Any student willing to participate must register using the link
              provided.
            </h5>
            <h5 className="guidelineContent">
              ● If a workshop session is to be held physically on campus, a
              student may attend the session physically in person, or virtually,
              by joining the online hybrid session.
            </h5>
            <h5 className="guidelineContent">
              ● Only students registered for the workshop series are eligible to
              compete in the mini hackathon.
            </h5>
            <h5 className="guidelineContent">
              ● Participants are required to have attended all sessions of the
              workshop series to be eligible to receive the e-Certificate of
              Completion of the workshop series.
            </h5>
          </div>
          <div id="guidelineBooklet">
            <div className="guidelineBookletdiv1">
              <h5 className="guidelineBookletdiv2">DOWNLOAD BOOKLET</h5>
              <img src={Cloud} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
