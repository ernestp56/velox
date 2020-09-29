import React, { Component } from "react";
import './style/MobileNavbar.css'

class MobileNavbar extends Component {
  constructor() {
      super();
      this.state = {}
  }

  render() {
      return (
        <div className="top-menu mobile" id="top-menu-mobile">
            <div></div>
            <div className="logo">velox</div>
            <div className="icon" id="ham">
                <div className="hamburger"></div>
            </div>
        </div>
      )
  }
}

export default MobileNavbar