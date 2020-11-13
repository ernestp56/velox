import React, { Component } from "react";
import './MobileNavbar.css';
import './shared.css';
import { Link } from "react-router-dom";
import Overlay from './Overlay'
import { isThisTypeNode } from "typescript";

class MobileNavbar extends Component {
  constructor() {
      super();
      this.state = {
        active: false
      }
  }

  handler(val) {
    this.setState({ active: val });
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