import React, { Component } from "react";
import './MobileNavbar.css';
import './shared.css';
import { Link } from "react-router-dom";
import Overlay from './Overlay'

class MobileNavbar extends Component {
  constructor() {
      super();
      this.state = {
        active: false
      }
  }

  toggleOverlay() {
    if (this.state.active) {
      this.setState({ active: false })
      document.body.style.overflow = "";
    } else {
      this.setState({ active: true })
      document.body.style.overflow = "hidden";
    }
  }
  
  render() {
      return (
        <div>
            <div className="top-menu mobile" id="top-menu-mobile">
                {/* eslint-disable-next-line */}
                <img className="velox-icon-mobile" src={`${process.env.PUBLIC_URL}/` + 'velox_icon.jpg'} alt={'velox_icon'} />
                <div className={this.state.active ? "icon active" : "icon"} onClick={this.toggleOverlay.bind(this)}>
                    <div className="hamburger"></div>
                </div>
            </div>
            <div className={this.state.active ? "overlay active" : "overlay"} >
                <div className="overlay-content">
                <Link to="/" onClick={this.toggleOverlay.bind(this)}><h4 className="about-header">Home</h4></Link>
                <Link to="/about" onClick={this.toggleOverlay.bind(this)}><h4 className="about-header">Om oss</h4></Link>
                <Link to="/contact" onClick={this.toggleOverlay.bind(this)}><h4 className="contact-header">Kontakt</h4></Link>
                </div>
            </div>
            <Overlay active = {this.state.active} />
        </div>
      )
  }
}

export default MobileNavbar