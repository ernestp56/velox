import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from '../main/About';
import Contact from '../main/Contact';
import Home from '../main/Home';
import Footer from '../footer/Footer';
import DesktopNavbar from "../navbar/DesktopNavbar";
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../useDarkMode';
import { lightTheme, darkTheme } from '../theme';
import { GlobalStyles } from '../global';
import Toggle from '../toggle'

function Routing() {

    const [theme, toggleTheme, componentMounted] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    const links = <>
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
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

    if (!componentMounted) {
        return <div />
    };
    
    return (
        <ThemeProvider theme={themeMode}>
            <>
                <GlobalStyles />
                <Router>
                    <>
                        <nav>
                            <DesktopNavbar>{links}</DesktopNavbar>
                        </nav>
                        
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
                    </>
                </Router>
            </>
        </ThemeProvider>
    )
}

export default Routing