import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from '../container/About';
import Contact from '../container/Contact';
import Home from '../container/Home';
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
        return window.screen.width < 900 ? true : false;
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
        const mql = window.matchMedia('(max-width: 900px)');
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
                            <MobileNavbar />
                        ) : (
                            <DesktopNavbar />
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