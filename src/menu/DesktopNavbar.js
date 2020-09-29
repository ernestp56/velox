import React, { Component } from "react";
import './style/DesktopNavbar.css'

class DesktopNavbar extends Component {
  constructor() {
      super();
      this.state = {};
  }

  render() {
      return (
        <div class="top-menu desktop" id="top-menu-desktop">
            <div></div>
            <div class="logo">velox</div>
            <div class="info">
                <h4 class="about-header">About us</h4>
                <h4 class="contact-header">Contact</h4>
            </div>
        </div>
      )
  }
}

export default DesktopNavbar