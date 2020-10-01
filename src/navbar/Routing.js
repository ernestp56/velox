import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './style/DesktopNavbar.css';
import './style/Header.css'
import './style/MobileNavbar.css';
import './style/Overlay.css'
import Home from '../container/Home'
import Footer from '../footer/Footer'

class Routing extends Component {
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
        return window.screen.width < 600 ? true : false;
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
        const mql = window.matchMedia('(max-width: 700px)');
            mql.addEventListener('change', (e) => {
            const mobileView = e.matches;
            if (mobileView) {
                this.setState({mobile: true});
            } else {
                this.setState({mobile: false});
            }
        });

        return (
            <Router>
                <div>
                    <header>
                        {this.state.mobile ? (
                            <div>
                                <div className="top-menu mobile" id="top-menu-mobile">
                                    <div></div>
                                    <div className="logo">velox</div>
                                    <div className={this.state.active ? "icon active" : "icon"} onClick={this.toggleOverlay.bind(this)}>
                                        <div className="hamburger"></div>
                                    </div>
                                </div>
                                <div className={this.state.active ? "overlay active" : "overlay"} >
                                    <div className="overlay-content">
                                    <Link to="/" className="about-header">Home</Link>
                                    <Link to="/about" className="about-header">About us</Link>
                                    <Link to="/contact" className="contact-header">Contact</Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="top-menu desktop" id="top-menu-desktop">
                                <div></div>
                                <div className="logo">velox</div>
                                <div className="info">
                                    <Link to="/" className="about-header">Home</Link>
                                    <Link to="/about" className="about-header">About us</Link>
                                    <Link to="/contact" className="contact-header">Contact</Link>
                                </div>
                            </div>
                            )}
                    </header>
                    
                    <Switch>
                        <Route path="/about">
                            <div>about us</div>
                        </Route>
                        <Route path="/contact">
                            <div>contact</div>
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
      
                    <Footer />

                </div>
            </Router>
        )
    }
}

export default Routing