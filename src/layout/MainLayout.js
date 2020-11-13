import React, { Component } from 'react';

class Home extends Component {
    constructor() {}

    render() {
        return (
            <>
                <div className="navbar">
                    {this.state.mobile ? (
                        <MobileNavbar />
                    ) : (
                        <DesktopNavbar />
                        )}
                </div>
                <main></main>
                <Footer />
            </>
        )
    }
}

