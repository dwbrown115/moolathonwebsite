import React from "react";
import PropTypes from "prop-types";

import "./SideBar.scss";

const Sidebar = ({ children, customClass, show, closeCallback }) => (
  <div
    className={`sidebar ${customClass}`}
    style={{ display: show ? "block" : "none" }}
  >
    <div className="overlay" onClick={closeCallback} />
    <div className="sidebar_content">{children}</div>
  </div>
);

Sidebar.propTypes = {
  children: PropTypes.element,
  customClass: PropTypes.string,
  show: PropTypes.bool,
  closeCallback: PropTypes.func
};

Sidebar.defaultProps = {
  children: <div>Empty Sidebar</div>,
  customClass: "",
  show: false,
  closeCallback: () => false
};

export default Sidebar;
