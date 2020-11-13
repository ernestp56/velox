import React, { Component } from "react";
import './MobileNavbar.css';
import './shared.css';
import Overlay from './Overlay'

class MobileNavbar extends Component {
  constructor() {
      super();
      this.state = {
        active: false
      }
  }

  handler(val) {
    if (val) {
      this.setState({ active: true })
      document.body.style.overflow = "hidden";
    } else {
      this.setState({ active: false })
      document.body.style.overflow = "";
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
            <Overlay active={this.state.active} handler={this.handler.bind(this)}>{this.props.children}</Overlay>
        </div>
      )
  }
}

export default MobileNavbar