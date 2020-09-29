import React, { Component } from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import './style/Header.css'

class Header extends Component {
  constructor() {
      super();
      this.state = {
          mobile: true
      }

      this.updateScreenSize.bind(this);
  }

  updateScreenSize() {
      const mql = window.matchMedia('(max-width: 600px)');
    
      mql.addEventListener('change', (e) => {
        const mobileView = e.matches;
        if (mobileView) {
          this.setState({mobile: true});
        } else {
            this.setState({mobile: false});
        }
      });
  }
  

  render() {
      return (
        <header id="navbar">
            {this.state.mobile ? (
                <MobileNavbar />
                ) : (
                <DesktopNavbar />
                )
            }
        </header>
      )
  }
}

export default Header