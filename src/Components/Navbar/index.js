import React, { PureComponent } from "react";
import { MoolaLogoNew19 } from "../../Images";
// import { HamburgerMenu } from '../index'
import "./Navbar.scss";

class Navbar extends PureComponent {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      sponsorship: "#FFFFFF",
      pricing: "#FFFFFF",
      features: "#FFFFFF",
      contact: "#FFFFFF",
      buttonTextColor: "white",
      bgColor: "transparent",
      borderColor: "white",
    };
  }

  scrollTo(name) {
    const element = document.getElementById(name);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 5) {
        if (this.state.status !== "moved") {
          this.setState({
            status: "moved",
            sponsorship: "#FF6C00",
            pricing: "#FF6C00",
            features: "#FF6C00",
            contact: "#FF6C00",
            buttonTextColor: "#FF6C00",
            bgColor: "white",
            borderColor: "#FF6C00",
          });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({
            status: "top",
            sponsorship: "#fff",
            pricing: "#fff",
            features: "#fff",
            contact: "#fff",
            buttonTextColor: "white",
            bgColor: "transparent",
            borderColor: "white",
          });
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  sponsorshipOver() {
    if (this.state.status === "moved") {
      this.setState({ sponsorship: "#323232" });
    } else {
      this.setState({ sponsorship: "#FF6C00" });
    }
  }

  sponsorshipLeave() {
    if (this.state.status === "moved") {
      this.setState({ sponsorship: "#FF6C00" });
    } else {
      this.setState({ sponsorship: "white" });
    }
  }

  pricingOver() {
    if (this.state.status === "moved") {
      this.setState({ pricing: "#323232" });
    } else {
      this.setState({ pricing: "#FF6C00" });
    }
  }

  pricingLeave() {
    if (this.state.status === "moved") {
      this.setState({ pricing: "#FF6C00" });
    } else {
      this.setState({ pricing: "white" });
    }
  }

  featuresOver() {
    if (this.state.status === "moved") {
      this.setState({ features: "#323232" });
    } else {
      this.setState({ features: "#FF6C00" });
    }
  }

  featuresLeave() {
    if (this.state.status === "moved") {
      this.setState({ features: "#FF6C00" });
    } else {
      this.setState({ features: "white" });
    }
  }

  contactOver() {
    if (this.state.status === "moved") {
      this.setState({ contact: "#323232" });
    } else {
      this.setState({ contact: "#FF6C00" });
    }
  }

  contactLeave() {
    if (this.state.status === "moved") {
      this.setState({ contact: "#FF6C00" });
    } else {
      this.setState({ contact: "white" });
    }
  }

  downloadOver() {
    if (this.state.status === "moved") {
      this.setState({
        buttonTextColor: "white",
        bgColor: "#FF6C00",
        borderColor: "#FF6C00",
      });
    } else {
      this.setState({
        buttonTextColor: "#FF6C00",
        bgColor: "white",
        borderColor: "white",
      });
    }
  }

  downloadLeave() {
    if (this.state.status === "moved") {
      this.setState({
        buttonTextColor: "#FF6C00",
        bgColor: "white",
        borderColor: "#FF6C00",
      });
    } else {
      this.setState({
        buttonTextColor: "white",
        bgColor: "transparent",
        borderColor: "white",
      });
    }
  }

  render() {
    return (
      <div className="navbar-container">
        <div
          className="navbar"
          style={{
            backgroundColor:
              this.state.status === "top" ? "transparent" : "white",
            color: this.state.status === "top" ? "white" : "#FF6C00",
            position: "fixed",
            boxShadow:
              this.state.status === "top"
                ? "0 12px 20px 0 rgba(0, 0, 0, 0), 0 4px 10px 0 rgba(0, 0, 0, 0)"
                : "0 12px 20px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="logo-wrapper" onClick={() => this.scrollTo("hero")}>
            <div>
              <img src={MoolaLogoNew19} alt="MoolathonLogoNews19.png" />
            </div>
          </div>
          <div className="navbar-elements">
            <div
              style={{
                color: `${this.state.sponsorship}`,
                display: "inline-block",
                textAlign: "center",
                padding: "11px 5px",
                margin: "0px 20px",
                fontSize: "11px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onClick={() => this.scrollTo("sponsorships")}
              onMouseEnter={() => this.sponsorshipOver()}
              onMouseLeave={() => this.sponsorshipLeave()}
            >
              Sponsorships
            </div>
            <div
              style={{
                color: `${this.state.pricing}`,
                display: "inline-block",
                textAlign: "center",
                padding: "11px 5px",
                margin: "0px 20px",
                fontSize: "11px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onClick={() => this.scrollTo("pricing")}
              onMouseEnter={() => this.pricingOver()}
              onMouseLeave={() => this.pricingLeave()}
            >
              Pricing
            </div>
            <div
              style={{
                color: `${this.state.features}`,
                display: "inline-block",
                textAlign: "center",
                padding: "11px 5px",
                margin: "0px 20px",
                fontSize: "11px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onClick={() => this.scrollTo("features")}
              onMouseEnter={() => this.featuresOver()}
              onMouseLeave={() => this.featuresLeave()}
            >
              Features
            </div>
            <div
              style={{
                color: `${this.state.contact}`,
                display: "inline-block",
                textAlign: "center",
                padding: "11px 5px",
                margin: "0px 20px",
                fontSize: "11px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onClick={() => this.scrollTo("contact")}
              onMouseEnter={() => this.contactOver()}
              onMouseLeave={() => this.contactLeave()}
            >
              Contact
            </div>
            <div
              className="navbar-download"
              onClick={() => this.scrollTo("download")}
              onMouseEnter={() => this.downloadOver()}
              onMouseLeave={() => this.downloadLeave()}
              style={{
                border: "1px solid",
                borderColor: `${this.state.borderColor}`,
                backgroundColor: `${this.state.bgColor}`,
                borderRadius: "30px",
                display: "inline-block",
                color: `${this.state.buttonTextColor}`,
                textAlign: "center",
                margin: "0px 25px",
                padding: "8px 15px",
                fontSize: "11px",
                fontWeight: "600",
                transition: "0.3s",
                cursor: "pointer",
              }}
            >
              DOWNLOAD NOW
            </div>
            {/* <div className="navbar-item">
                            <div className="hamburger-menu-wrapper">
                                <HamburgerMenu /> 
                            </div>
                        </div> */}
          </div>
        </div>
        <div className="navbar-shadow" />
      </div>
    );
  }
}

export default Navbar;
