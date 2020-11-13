import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from '../main/About';
import Contact from '../main/Contact';
import Home from '../main/Home';
import Footer from '../footer/Footer';
import DesktopNavbar from "../navbar/DesktopNavbar";
import MobileNavbar from "../navbar/MobileNavbar";

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
        return window.screen.width < 550 ? true : false;
    }
    
    render() {
        const links = <>
            <Link to="/" className="about-header">Home</Link>
            <Link to="/about" className="about-header">Om oss</Link>
            <Link to="/contact" className="contact-header">Kontakt</Link>
        </>
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
            <Router>
                <div>
                    <div className="navbar">
                        {this.state.mobile ? (
                            <MobileNavbar>{links}</MobileNavbar>
                        ) : (
                            <DesktopNavbar>{links}</DesktopNavbar>
                            )}
                    </div>
                    
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
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