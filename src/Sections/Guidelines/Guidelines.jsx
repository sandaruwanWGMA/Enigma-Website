import React from "react";
import guidelineBackground from "../../assets/Guidelines/guidelineBackground.svg";
import guidelineBackgroundMobile from "../../assets/Guidelines/guidelineBackgroundMobile.svg";
import soldier from "../../assets/Guidelines/soldier.svg";
import Cloud from "../../assets/Guidelines/Cloud.svg";
import "./GuidelinesStyles/Guidelines.css";
import enigmaBooklet from "../../assets/Enigma Delegate Booklet Final.pdf";

function Guidelines(props) {
  return (
    <section id="guidelines">
      <div className="guideline" style={{ height: "100vh" }}>
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
              ● Only undergraduates of the University of Moratuwa will be
              eligible to participate in the Hackathon.
            </h5>
            <h5 className="guidelineContent">
              ● Any programming language that is provided by the Hackerrank
              platform can be used in the Hackathon.
            </h5>
          </div>
          <a id="guidelineBooklet" href={enigmaBooklet} target="_blank">
            <div className="guidelineBookletdiv">
              <h5 className="guidelineBookletText">DOWNLOAD BOOKLET</h5>
              <img src={Cloud} alt="" className="cloud"></img>
            </div>
          </a>
        </div>
      </div>
      <div className="guidelineMobile">
        <img
          src={guidelineBackgroundMobile}
          alt=""
          className="guidelineBackgroundMobile"
        />
        <div className="guidelineTextsMobile">
          <div className="guidelineTopicMobile">
            <h1 id="guidelineTopicMobile">Guidelines</h1>
          </div>
          <div id="guidelineContentMobile">
            <h5 className="guidelineContentMobile">
              ● Only undergraduates of the University of Moratuwa will be
              eligible to participate in the Hackathon.
            </h5>
            <h5 className="guidelineContentMobile">
              ● Any programming language that is provided by the Hackerrank
              platform can be used in the Hackathon.
            </h5>
          </div>
          <a id="guidelineBookletMobile" href={enigmaBooklet} target="_blank">
            <div className="guidelineBookletdivMobile">
              <h5 className="guidelineBookletTextMobile">DOWNLOAD BOOKLET</h5>
              <img src={Cloud} alt=""></img>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Guidelines;
