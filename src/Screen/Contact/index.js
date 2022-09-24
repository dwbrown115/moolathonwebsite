import React, { PureComponent } from "react";
import axios from "axios";
import { Facebook, Twitter, Instagram } from "../../Images";
import "./Contact.scss";

class Contact extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3000/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <div className="contact-container" style={{ position: "relative" }}>
        <div
          id="contact"
          style={{ position: "absolute", top: -71, right: "50%" }}
        />
        <div className="contact-wrapper">
          <div className="contact-header-wrapper">
            <div className="contact-header">Contact Us</div>
            <div className="contact-header-break" />
            <div className="contact-header-text">
              find us on socials or send us a message here
            </div>
          </div>
          <div className="contact-cards-wrapper">
            <div className="contact-card-text-wrapper">
              <div className="contact-card-text-header-wrapper">
                <div className="contact-card-text-header">CONTACT US</div>
                <div className="contact-card-text-header-break" />
                <div className="contact-card-header-text">
                  For support please email support@moolathon.com
                </div>
                <div className="contact-card-header-text">
                  For all other inquiries, please use our message form.
                </div>
              </div>
              <div className="contact-card-text-content-wrapper">
                <div className="contact-card-text-content">
                  <div className="contact-card-text-content-header">
                    LOCATION
                  </div>
                  <div className="contact-card-text-content-text">
                    123 Main Street, Louisville, KY
                  </div>
                </div>
                <div className="contact-card-text-content">
                  <div className="contact-card-text-content-header">PHONE</div>
                  <div className="contact-card-text-content-text">
                    502.123.4567
                  </div>
                </div>
                <div className="contact-card-text-content">
                  <div className="contact-card-text-content-header">EMAIL</div>
                  <div className="contact-card-text-content-text">
                    info@moolathon.com
                  </div>
                </div>
              </div>
              <div className="contact-card-text-socials-wrapper">
                <div className="contact-card-text-socials-image">
                  <div>
                    <img src={Facebook} alt="Facebook.png" />
                  </div>
                </div>
                <div className="contact-card-text-socials-image">
                  <div>
                    <img src={Twitter} alt="Twitter.png" />
                  </div>
                </div>
                <div className="contact-card-text-socials-image">
                  <div>
                    <img src={Instagram} alt="Instagram.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-card-form-container">
              <div className="contact-card-form-header">SEND US A MESSAGE</div>
              <div className="contact-card-form-wrapper">
                <form
                  id="contact-form"
                  className="contact-card-form"
                  onSubmit={this.handleSubmit.bind(this)}
                  method="POST"
                >
                  <input
                    className="contact-form-name"
                    type="text"
                    placeholder="Name:"
                    value={this.state.name}
                    onChange={this.onNameChange.bind(this)}
                  />
                  <input
                    type="email"
                    className="contact-form-email"
                    id="email"
                    placeholder="Email:"
                    aria-describedby="emailHelp"
                    value={this.state.email}
                    onChange={this.onEmailChange.bind(this)}
                  />
                  <textarea
                    className="contact-form-message"
                    placeholder="Message:"
                    id="message"
                    rows="5"
                    value={this.state.message}
                    onChange={this.onMessageChange.bind(this)}
                  />
                  <button className="contact-form-submit-button" type="submit">
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default Contact;
