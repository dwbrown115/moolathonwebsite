import React, { PureComponent } from "react";
import { OrganizerIcon, SupportersIcon } from "../../Images";
import "./Pricing.scss";

class Pricing extends PureComponent {
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
      <div className="pricing-container" style={{ position: "relative" }}>
        <div
          id="pricing"
          style={{ position: "absolute", top: -71, right: "50%" }}
        />
        <div className="pricing-wrapper">
          <div className="pricing-header-wrapper">
            <div className="pricing-header">Pricing</div>
            <div className="pricing-divider" />
            <div className="pricing-text">
              simple to help you raise effectively
            </div>
          </div>
          <div className="pricing-cards-wrapper">
            <div className="pricing-card">
              <div className="pricing-card-title">ORGANIZERS</div>
              <div className="organizer-image-wrapper">
                <div>
                  <img src={OrganizerIcon} alt="OrganizerIcon.png" />
                </div>
              </div>
              <div className="pricing-subheader-wrapper">
                <div className="pricing-percentage-wrapper">
                  <div className="pricing-subheader">YOU KEEP</div>
                  <div className="pricing-percentage">90%</div>
                </div>
                <div className="pricing-percentage-wrapper">
                  <div className="pricing-percentage">10%</div>
                  <div className="pricing-subheader">SIMPLE FEES</div>
                </div>
              </div>
              <div className="pricing-text">
                90% of all funds that you raise on the Moolathon platform will
                be directly deposited to your account for your cause. There is a
                3% credit card processing fee, and a 7% service charge.
              </div>
              <div className="pricing-button">START ORGANIZING</div>
            </div>
            <div className="pricing-card">
              <div className="pricing-card-title">SUPPORTERS</div>
              <div className="supporter-image-wrapper">
                <div>
                  <img src={SupportersIcon} alt="SupportersIcon.png" />
                </div>
              </div>
              <div className="pricing-subheader-wrapper">
                <div className="pricing-subheader">
                  <div className="pricing-cents">$0.30</div>
                  <div className="pricing-subheader-text">PER TRANSACTION</div>
                </div>
              </div>
              <div className="pricing-text">
                When you register for an event, or pledge to somone’s Campaign,
                you will be charged and additional 30 cents per pledge or
                registration.
              </div>
              <div className="pricing-sub-text-wrapper">
                <div className="pricing-sub-text">Example:</div>
                <div className="pricing-sub-text">
                  Event Minimum Registration = $10
                </div>
                <div className="pricing-sub-text">
                  You will be charged = $10.30
                </div>
              </div>
              <div
                className="pricing-event-button"
                onClick={() => this.scrollTo("events")}
              >
                FIND AN EVENT
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
