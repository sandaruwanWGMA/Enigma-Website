import React from "react";
import guidelineBackground from "../../assets/Guidelines/guidelineBackground.svg";
import guidelineBackgroundMobile from "../../assets/Guidelines/guidelineBackgroundMobile.svg";
import soldier from "../../assets/Guidelines/soldier.svg";
import Cloud from "../../assets/Guidelines/Cloud.svg";
import "./GuidelinesStyles/Guidelines.css";

function Guidelines(props) {
  return (
    <section>
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
              ● Only undergraduates of the University of Moratuwa will be
              eligible to participate in the Hackathon.
            </h5>
            <h5 className="guidelineContent">
              ● Any programming language that is provided by the Hackerrank
              platform can be used in the Hackathon.
            </h5>
          </div>
          <div id="guidelineBooklet">
            <div className="guidelineBookletdiv">
              <h5 className="guidelineBookletText">DOWNLOAD BOOKLET</h5>
              <img src={Cloud} alt="" className="cloud"></img>
            </div>
          </div>
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
          <div id="guidelineBookletMobile">
            <div className="guidelineBookletdivMobile">
              <h5 className="guidelineBookletTextMobile">DOWNLOAD BOOKLET</h5>
              <img src={Cloud} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guidelines;
