import React, { Component } from "react";
import './DesktopNavbar.css';
import MobileNavbar from "./MobileNavbar";

class DesktopNavbar extends Component {
  constructor() {
      super();
      this.state = {
          mobile: this.isMobile(),
          active: false
      }
  }

  componentDidUpdate(prevProps) {
      if (prevProps.active !== this.props.active) {
        this.setState({ active: this.props.active })
      }
  }

  isMobile() {
      return window.screen.width < 550 ? true : false;
  }
  

  render() {
    const mql = window.matchMedia('(max-width: 550px)');
        mql.addEventListener('change', (e) => {
        const mobileView = e.matches;
        if (mobileView) {
            this.setState({mobile: true});
        } else {
            this.setState({mobile: false});
        }
    });
    return (
      this.state.mobile ? (
          <MobileNavbar theme={this.props.theme}>{this.props.children}</MobileNavbar>
      ) : (
        <section className="desktop">
            <img src={`${process.env.PUBLIC_URL}/velox_icon.jpg`} alt={'velox_icon'} />
            <header>
              {this.props.children}
            </header>
        </section>
      )
    )
  }
}

export default DesktopNavbar