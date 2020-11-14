import React, { Component } from "react";
import './DesktopNavbar.css';

class DesktopNavbar extends Component {
  constructor() {
      super();
      this.state = {};
  }

  render() {
      return (
        <section className="desktop">
            <img src={`${process.env.PUBLIC_URL}/velox_icon.jpg`} alt={'velox_icon'} />
            <div className="links">
              {this.props.children}
            </div>
        </section>
      )
  }
}

export default DesktopNavbar