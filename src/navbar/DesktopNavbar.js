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
            <header>
              {this.props.children}
            </header>
        </section>
      )
  }
}

export default DesktopNavbar