import React, { Component } from "react";
import './DesktopNavbar.css';
import './shared.css';

class DesktopNavbar extends Component {
  constructor() {
      super();
      this.state = {};
  }

  render() {
      return (
        <div className="top-menu">
            {/* eslint-disable-next-line */}
            <img className="velox-icon" src={`${process.env.PUBLIC_URL}/` + 'velox_icon.jpg'} alt={'velox_icon'} />
            <div className="info">
              {this.props.children}
            </div>
        </div>
      )
  }
}

export default DesktopNavbar