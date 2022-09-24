import React, { PureComponent } from "react";
import { iPhone } from "../../Images";
import "./Events.scss";

class Events extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="events-container" style={{ position: "relative" }}>
        <div
          id="events"
          className="features"
          style={{ position: "absolute", top: -71, right: "50%" }}
        />
        <div className="events-header-wrapper">
          <div className="events-header">Events Anywhere</div>
          <div className="events-divider" />
          <div className="events-text">
            Create a virtual fitness event with no overhead; or extend a
            physical event virtually to reach more of your supporters.
          </div>
        </div>
        <div className="event-steps-wrapper">
          <div className="event-steps">
            <div className="phone-image">
              <div>
                <img src={iPhone} alt="iPhone.png" />
              </div>
            </div>
            <div className="event-step-number">1</div>
            <div className="event-step-title">CREATE YOUR EVENT</div>
            <div className="event-step-text">
              Open registration and share your event via socials, text, or email
            </div>
          </div>
          <div className="event-steps">
            <div className="phone-image">
              <div>
                <img src={iPhone} alt="iPhone.png" />
              </div>
            </div>
            <div className="event-step-number">2</div>
            <div className="event-step-title">HOST YOUR EVENT</div>
            <div className="event-step-text">
              Participants use the MOOLATHON app to track from anywhere
            </div>
          </div>
          <div className="event-steps">
            <div className="phone-image">
              <div>
                <img src={iPhone} alt="iPhone.png" />
              </div>
            </div>
            <div className="event-step-number">3</div>
            <div className="event-step-title">CELEBRATE CAUSES</div>
            <div className="event-step-text">
              Share accomplishments and raise awareness with almost no overhead
            </div>
          </div>
        </div>
        <div className="event-bottom-text">
          Sign up as a group, and you can create virtual fitness fundraisers
          that your supporters can participate in anytime, anywhere!
        </div>
      </div>
    );
  }
}

export default Events;
