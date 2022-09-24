import React, { PureComponent } from "react";
import {
  ProgressIcon,
  BeSocialIcon,
  FollowOthersIcon,
  MoolastatsIcon,
} from "../../Images";
import "./Moolathon.scss";

class Index extends PureComponent {
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
      <div className="moolathon-container" style={{ position: "relative" }}>
        <div
          id="features"
          className="features"
          style={{ position: "absolute", top: -71, right: "50%" }}
        />
        <div className="header-wrapper">
          <div className="header">Moolathon</div>
          <div className="break" />
          <div className="header-text">
            makes it easy to find individuals and groups to support, causes to
            contribute to, and events to participate in.
          </div>
        </div>
        <div className="features-wrapper">
          <div className="feature">
            <div className="image-wrapper">
              <div>
                <img src={ProgressIcon} alt="ProgressIcon.png" />
              </div>
            </div>
            <div className="feature-header">PROGRESS REPORTS</div>
            <div className="feature-text">
              Allow others to cheer you on by sharing your progress
            </div>
          </div>
          <div className="feature">
            <div className="image-wrapper">
              <div>
                <img src={BeSocialIcon} alt="BeSocialIcon.png" />
              </div>
            </div>
            <div className="feature-header">BE SOCIAL</div>
            <div className="feature-text">
              Share your accomplishments on social media
            </div>
          </div>
          <div className="feature">
            <div className="image-wrapper">
              <div>
                <img src={FollowOthersIcon} alt="FollowOthersIcon.png" />
              </div>
            </div>
            <div className="feature-header">FOLLOW OTHERS</div>
            <div className="feature-text">
              Find friends to see how they’re staying fit and raising money
            </div>
          </div>
          <div className="feature">
            <div className="image-wrapper">
              <div>
                <img src={MoolastatsIcon} alt="MoolastatsIcon.png" />
              </div>
            </div>
            <div className="feature-header">MOOLASTATS</div>
            <div className="feature-text">
              Your profile shows what you’re doing to give back
            </div>
          </div>
        </div>
        <div className="button-wrapper">
          <div
            className="moolathon-button"
            onClick={() => this.scrollTo("events")}
          >
            FIND AN EVENT
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
