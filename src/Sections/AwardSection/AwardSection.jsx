import React from "react";

import ItemOne from "../../assets/images-award-page/itemone.svg";
import ItemTwo from "../../assets/images-award-page/itemtwo.svg";
import ItemThree from "../../assets/images-award-page/itemthree.svg";
import ManBg from "../../assets/images-award-page/manbg.svg";

import "./AwardSection.css";

export default function AwardSection() {
  return (
    <>
      <section className="cover">
        <div className="text-container">
          <div className="title">Awards</div>
          <div className="prizes-container">
            <div className="list-item-one">
              <img
                src={ItemOne}
                alt="1"
                border="0"
                className="image-item-one"
              />
              <div className="text">
                <div className="title-list">1ST RUNNERS UP </div>
                <div className="desc">1,000$</div>
              </div>
            </div>
            <div className="list-item-two">
              <img
                src={ItemTwo}
                alt="1"
                border="0"
                className="image-item-two"
              />
              <div className="text">
                <div className="title-list">1ST RUNNERS UP </div>
                <div className="desc">1,000$</div>
              </div>
            </div>
            <div className="list-item-one list-item-three">
              <img
                src={ItemThree}
                alt="1"
                border="0"
                className="image-item-one"
              />
              <div className="text">
                <div className="title-list">1ST RUNNERS UP </div>
                <div className="desc">1,000$</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <img src={ManBg} alt="1" border="0" className="man-image" />
        </div>
      </section>
    </>
  );
}
