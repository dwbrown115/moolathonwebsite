import React, { PureComponent } from "react";
import { MoolathonIcon, AppStoreButton, GooglePlayButton } from "../../Images";
import "./Footer.scss";

class Footer extends PureComponent {
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
      <div className="footer-container">
        <div className="footer-column-wrapper">
          <div className="footer-left-side">
            <div className="left-side-logo-wrapper">
              <div>
                <img src={MoolathonIcon} alt="MoolathonIcon.png" />
              </div>
            </div>
            <div className="left-side-link-wrapper">
              <div className="left-side-link">Our Team</div>
              <div
                className="left-side-link"
                onClick={() => this.scrollTo("features")}
              >
                Features
              </div>
              <div
                className="left-side-link"
                onClick={() => this.scrollTo("sponsorships")}
              >
                Sponsorships
              </div>
              <div
                className="left-side-link"
                onClick={() => this.scrollTo("pricing")}
              >
                Pricing
              </div>
              <div
                className="left-side-link"
                onClick={() => this.scrollTo("contact")}
              >
                Contact
              </div>
            </div>
          </div>
          <div className="footer-right-side">
            <div className="right-side-header">DOWNLOAD NOW</div>
            <div className="right-side-image-wrapper">
              <div>
                <img src={AppStoreButton} alt="AppStoreButton.png" />
              </div>
            </div>
            <div className="right-side-image-wrapper">
              <div>
                <img src={GooglePlayButton} alt="GooglePlayButton.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-text">©2021 Moolathon</div>
      </div>
    );
  }
}

export default Footer;
