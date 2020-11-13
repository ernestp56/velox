import React, { Component } from "react";
import './DesktopNavbar.css';
import './shared.css';
import { Link } from "react-router-dom";

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
                <Link to="/" className="about-header">Home</Link>
                <Link to="/about" className="about-header">Om oss</Link>
                <Link to="/contact" className="contact-header">Kontakt</Link>
            </div>
        </div>
      )
  }
}

export default DesktopNavbar