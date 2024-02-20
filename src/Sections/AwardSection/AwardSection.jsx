import React from "react";

import ItemOne from "../../assets/images-award-page/itemone.svg";
import ItemTwo from "../../assets/images-award-page/itemtwo.svg";
import ItemThree from "../../assets/images-award-page/itemthree.svg";
import ManBg from "../../assets/images-award-page/manbg.svg";
import RotatedImage from "../../assets/images-award-page/rotated image.svg";

import "./AwardSection.css";

export default function AwardSection() {
  return (
    <section id="awards">
      <section className="cover">
        <div className="text-container">
          <div className="title-p">Awards</div>
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
                <div className="desc"></div>
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
                <div className="title-list">WINNER </div>
                <div className="desc"></div>
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
                <div className="title-list">2ND RUNNERS UP </div>
                <div className="desc"></div>
              </div>
            </div>
          </div>
        </div>
        <img src={RotatedImage} alt="1" border="0" className="rotated-img" />
        <div className="container">
          <img src={ManBg} alt="1" border="0" className="man-image" />
        </div>
      </section>

      {/* =======================mobile version======================= */}
      <div className="mobile-cover">
        <div className="mobile-award-title-container">
          <div className="mobile-award-title">Awards</div>
        </div>
        <div className="mobile-prizes-container">
          <img src={ItemTwo} alt="1" border="0" className="mobile-image-one" />
          <div className="mobile-text">
            <div className="mobile-title-list">Winner</div>
            <div className="mobile-desc"></div>
          </div>
        </div>
        <div className="mobile-prizes-container-two">
          <img src={ItemOne} alt="1" border="0" className="mobile-image-one" />
          <div className="mobile-text">
            <div className="mobile-title-list">1ND RUNNERS UP</div>
            <div className="mobile-desc"></div>
          </div>
        </div>

        <div className="mobile-prizes-container-three">
          <img
            src={ItemThree}
            alt="1"
            border="0"
            className="mobile-image-one"
          />
          <div className="mobile-text">
            <div className="mobile-title-list">2ND RUNNERS UP</div>
            <div className="mobile-desc"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
