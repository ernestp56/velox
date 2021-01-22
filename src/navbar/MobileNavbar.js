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
          <section>
            <img className="mobile" src={`${process.env.PUBLIC_URL}/velox_icon.jpg`} alt={'velox_icon'} />
            {/* <div className={this.state.active ? "menu opened" : "opened"} onClick={this.toggleOverlay.bind(this)}>
                <div className="hamburger-menu"></div>
            </div> */}

            <button className={this.state.active ? "menu opened" : "menu"} onClick={this.toggleOverlay.bind(this)} aria-label="Main Menu">
                <svg fill="#f7ac2b" width="auto" height="auto" viewBox="0 0 100 100">
                  <path fill="#f7ac2b" class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                  <path fill="#f7ac2b" class="line line2" d="M 20,50 H 80" />
                  <path fill="#f7ac2b" class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>
          </section>
          <Overlay theme={this.props.theme} active={this.state.active} handler={this.handler.bind(this)}>{this.props.children}</Overlay>
        </>
      )
  }
}

export default MobileNavbar