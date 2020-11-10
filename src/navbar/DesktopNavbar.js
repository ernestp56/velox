import React, { Component } from "react";
import './style/DesktopNavbar.css'

class DesktopNavbar extends Component {
  constructor() {
      super();
      this.state = {};
  }

  render() {
      return (
        <div className="top-menu desktop" id="top-menu-desktop">
            <div></div>
            <img src="../../public/velox_icon.jpg" />
            {/* <div className="logo">velox</div> */}
            <div className="info">
                <h4 className="about-header">Om oss</h4>
                <h4 className="contact-header">Kontakt</h4>
            </div>
        </div>
      )
  }
}

export default DesktopNavbar