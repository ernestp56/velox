import React, { Component } from 'react';
import "./style/Carousel.css"

class Slide extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="slide">
                <img src={`${process.env.PUBLIC_URL}/assets/` + this.props.img} alt={this.props.alt} />
                <div className="prev">&#10094;</div>
                <div className="next">&#10095;</div>
            </div>
        )
    }
}

export default Slide