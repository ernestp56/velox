import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slide from './Slide'
import './Carousel.css'
 
class ImgCarousel extends Component {
    constructor() {
        super();
        this.state = {}
    }

    listSlides() {
        const images = {"Product - bottle": "velox_01 (2).png", "Product - set": "velox_02.png"};
        const keys = Object.keys(images)
        return keys.map((key, index) => {
            return (
                <Slide key = {index} alt = {key} img = {images[key]} />
            )
        })
    }


    render() {
        return (
            <Carousel showThumbs={false} infiniteLoop={true}>
                {this.listSlides()}
            </Carousel>
        );
    }
};

export default ImgCarousel