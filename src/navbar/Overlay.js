import React, { Component } from 'react';
import './Overlay.css'

class Overlay extends Component {
    constructor() {}

    isActive() {
        return this.props.active ? false : true;
    }

    render() {
        return (
            <div className={this.props.active ? "overlay active" : "overlay"} >
                <div className="overlay-content">
                    <div onClick={() => this.props.handler(this.isActive())}>{this.props.children}</div>
                </div>
            </div>
        )
    }
}

export default Overlay