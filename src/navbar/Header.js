import React, { Component } from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import './style/Header.css'

class Header extends Component {
    constructor() {
        super();
        this.state = {
            mobile: this.isMobile()
        }
    }

    isMobile() {
        return window.screen.width < 600 ? true : false;
    }

    render() {
        
        const mql = window.matchMedia('(max-width: 600px)');
            mql.addEventListener('change', (e) => {
            const mobileView = e.matches;
            if (mobileView) {
                this.setState({mobile: true});
            } else {
                this.setState({mobile: false});
            }
        });
        return (
            <header>
                {this.state.mobile ? (
                    <MobileNavbar />
                    ) : (
                    <DesktopNavbar />
                    )}
            </header>
        )
    }
}

export default Header