import React, { PureComponent } from "react";
import { iPhoneAngledPair } from "../../Images";
import "./Hero.scss";

class Hero extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  scrollTo(name) {
    const element = document.getElementById(name);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  render() {
    return (
      <div className="hero-container" style={{ position: "relative" }}>
        <div
          id="hero"
          style={{ position: "absolute", top: -71, right: "50%" }}
        />
        <div className="hero-wrapper">
          <div className="left-side-wrapper">
            <div className="hero-text-wrapper">
              <div className="header-wrapper">
                <div className="header-text">Get Fit.</div>
                <div className="header-text">Raise Money.</div>
              </div>
              <div className="hero-paragraph-wrapper">
                <div className="hero-paragraph">
                  Moolathon (moo•la•thon) is a social fundraising platform
                  around fitness tracking. It gives individuals and groups, the
                  ability to raise money for a cause, through the pursuit of a
                  cause we can all relate to… Getting Fit!
                </div>
              </div>
              <div className="hero-button-wrappers">
                <div
                  className="hero-button"
                  onClick={() => this.scrollTo("download")}
                >
                  DOWNLOAD NOW
                </div>
                <div
                  className="hero-button"
                  onClick={() => this.scrollTo("features")}
                >
                  DISCOVER MORE
                </div>
              </div>
            </div>
          </div>
          <div className="right-side-wrapper">
            <div className="image-wrapper">
              <div>
                <img src={iPhoneAngledPair} alt={"iPhoneAngledPair.png"} />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="slide-footer" /> features download*/}
      </div>
    );
  }
}

export default Hero;
