import React, { Component } from "react";
import './DesktopNavbar.css';

class DesktopNavbar extends Component {
  constructor() {
      super();
      this.state = {};
  }

  render() {
      return (
        <nav>
            <img src={`${process.env.PUBLIC_URL}/velox_icon.jpg`} alt={'velox_icon'} />
            <div className="links">
              {this.props.children}
            </div>
        </nav>
      )
  }
}

export default DesktopNavbar