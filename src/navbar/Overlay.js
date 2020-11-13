import React, { Component } from 'react';
import './Overlay.css'

class Overlay extends Component {
    constructor() {
        super();
        this.state = { active: false }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.active !== this.props.active) {
          this.setState({ active: this.props.active })
        }
      }

    render() {
        return (
            <div className={this.state.active ? "overlay active" : "overlay"} >
                <div className="overlay-content">
                    <div>Om oss</div>
                    <div>Kontakt</div>
                </div>
            </div>
        )
    }
}

export default Overlay