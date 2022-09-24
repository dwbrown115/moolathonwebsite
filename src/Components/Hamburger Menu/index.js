import React, { PureComponent } from "react";
import Sidebar from "./Side Bar";
import { MoolathonIcon } from "../../Images";

import "./HamburgerMenu.scss";

class HamburgerMenu extends PureComponent {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      // bgColor: "transparent",
      // borderColor: "white",
      // barColor: "white",
      bgColor: "transparent",
      borderColor: "#FF6C00",
      barColor: "#FF6C00",
      transformed: "no",
      bar1Webkit: "rotate(0deg) translate(0px, 0px)",
      bar1Transform: "rotate(0deg) translate(0px, 0px)",
      bar2Opacity: "1",
      bar3Webkit: "rotate(0deg) translate(0px, 0px)",
      bar3Transform: "rotate(0deg) translate(0px, 0px)",
      showSidebar: false,
    };
  }

  scrollTo(name) {
    const element = document.getElementById(name);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    this.setState({
      showSidebar: !this.state.showSidebar,
    });
  }

  handleClick() {
    if (this.state.transformed !== "no") {
      this.setState({
        transformed: "no",
        bar1Webkit: "rotate(0deg) translate(0px, 0px)",
        bar1Transform: "rotate(0deg) translate(0px, 0px)",
        bar2Opacity: "1",
        bar3Webkit: "rotate(0deg) translate(0px, 0px)",
        bar3Transform: "rotate(0deg) translate(0px, 0px)",
      });
    } else {
      this.setState({
        transformed: "yes",
        bar1Webkit: "rotate(-45deg) translate(-28.928475px, 19.28565px)",
        bar1Transform: "rotate(-45deg) translate(-28.928475px, 19.28565px)",
        bar2Opacity: "0",
        bar3Webkit: "rotate(45deg) translate(-25.7142px, -25.7142px)",
        bar3Transform: "rotate(45deg) translate(-25.7142px, -25.7142px)",
      });
    }
    this.setState({
      showSidebar: !this.state.showSidebar,
    });
  }

  toggleSidebar = () => {
    this.setState({
      showSidebar: !this.state.showSidebar,
    });
  };

  // componentDidMount() {
  //   this.listener = document.addEventListener("scroll", (e) => {
  //     var scrolled = document.scrollingElement.scrollTop;
  //     if (scrolled >= 5) {
  //       if (this.state.status !== "moved") {
  //         this.setState({
  //           status: "moved",
  //           bgColor: "transparent",
  //           borderColor: "#FF6C00",
  //           barColor: "#FF6C00",
  //         });
  //       }
  //     } else {
  //       if (this.state.status !== "top") {
  //         this.setState({
  //           status: "top",
  //           // bgColor: "transparent",
  //           // borderColor: "white",
  //           // barColor: "white",
  //           bgColor: "transparent",
  //           borderColor: "#FF6C00",
  //           barColor: "#FF6C00",
  //         });
  //       }
  //     }
  //   });
  // }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  menuOver() {
    if (this.state.status === "moved") {
      this.setState({
        bgColor: "#FF6C00",
        borderColor: "#575757",
        barColor: "white",
      });
    } else {
      this.setState({
        bgColor: "white",
        borderColor: "white",
        barColor: "#FF6C00",
      });
    }
  }

  menuLeave() {
    if (this.state.status === "moved") {
      this.setState({
        bgColor: "white",
        borderColor: "#FF6C00",
        barColor: "#FF6C00",
      });
    } else {
      this.setState({
        bgColor: "transparent",
        borderColor: "white",
        barColor: "white",
      });
    }
  }

  render() {
    return (
      <div className="hamburger-menu-container">
        <Sidebar
          show={this.state.showSidebar}
          closeCallback={this.toggleSidebar}
          customClass="custom_sidebar_class"
        >
          <React.Fragment>
            <div className="elements">
              {/* <div className="header" /> */}
              <div className="logo-wrapper">
                <div>
                  <img src={MoolathonIcon} alt="MoolathonIcon.png" />
                </div>
                {/* <div className="moolathon-wrapper">
                  <div className="moolathon">moolathon</div>
                </div> */}
              </div>
              <div className="element-wrapper">
                <div
                  className="element"
                  onClick={() => this.scrollTo("sponsorships")}
                >
                  Sponsorships
                </div>
                <div
                  className="element"
                  onClick={() => this.scrollTo("pricing")}
                >
                  Pricing
                </div>
                <div
                  className="element"
                  onClick={() => this.scrollTo("features")}
                >
                  Features
                </div>
                <div
                  className="element"
                  onClick={() => this.scrollTo("contact")}
                >
                  Contact
                </div>
                <div
                  className="element-button"
                  onClick={() => this.scrollTo("download")}
                >
                  DOWNLOAD NOW
                </div>
              </div>
            </div>
          </React.Fragment>
        </Sidebar>
        <div className="hamburger-button-container">
          <div
            className="hamburger-button"
            onClick={() => this.handleClick()}
            // onMouseEnter={() => this.menuOver()}
            // onMouseLeave={() => this.menuLeave()}
            style={{
              display: "inline-block",
              cursor: "none",
              border: "9.642825px solid",
              borderColor: `${this.state.borderColor}`,
              backgroundColor: `${this.state.bgColor}`,
              padding: "42.857px",
              borderRadius: "50%",
              transition: "0.3s",
            }}
          >
            <div
              className="bar1"
              style={{
                width: "112.5px",
                height: "9.642825px",
                backgroundColor: `${this.state.barColor}`,
                margin: "19.28565px 0",
                transition: "0.3s",
                borderRadius: "6.42855px",
                border: "3.214275px solid",
                borderColor: `${this.state.barColor}`,
                WebkitTransform: `${this.state.bar1Webkit}`,
                transform: `${this.state.bar1Transform}`,
              }}
            />
            <div
              className="bar2"
              style={{
                width: "112.5px",
                height: "9.642825px",
                backgroundColor: `${this.state.barColor}`,
                margin: "19.28565px 0",
                transition: "0.3s",
                borderRadius: "6.42855px",
                border: "3.214275px solid",
                borderColor: `${this.state.barColor}`,
                opacity: `${this.state.bar2Opacity}`,
              }}
            />
            <div
              className="bar3"
              style={{
                width: "112.5px",
                height: "9.642825px",
                backgroundColor: `${this.state.barColor}`,
                margin: "19.28565px 0",
                transition: "0.3s",
                borderRadius: "6.42855px",
                border: "3.214275px solid",
                borderColor: `${this.state.barColor}`,
                WebkitTransform: `${this.state.bar3Webkit}`,
                transform: `${this.state.bar3Transform}`,
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HamburgerMenu;
