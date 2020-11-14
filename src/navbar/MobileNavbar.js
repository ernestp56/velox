import React, { Component } from "react";
import './MobileNavbar.css';
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
        <>
          <nav>
            <img className="mobile" src={`${process.env.PUBLIC_URL}/velox_icon.jpg`} alt={'velox_icon'} />
            <div className={this.state.active ? "hamburger active" : "hamburger"} onClick={this.toggleOverlay.bind(this)}>
                <div className="hamburger-menu"></div>
            </div>
          </nav>
          <Overlay active={this.state.active} handler={this.handler.bind(this)}>{this.props.children}</Overlay>
        </>
      )
  }
}

export default MobileNavbar