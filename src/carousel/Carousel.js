import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slide from './Slide'
import './Carousel.css'
 
class ImgCarousel extends Component {
    constructor() {
        super();
        this.state = {}
    }

    isMobile() {
        return window.screen.width < 550 ? true : false;
    }

    listSlides() {
        const images = { "Velox 3": "velox_large_3.png", "Velox 1": "velox_large_1.png", "Velox 2": "velox_large_2.png"};
        const keys = Object.keys(images)
        return keys.map((key, index) => {
            return (
                <Slide key = {index} alt = {key} img = {images[key]} />
            )
        })
    }

    listLargeSlides() {
        const images = {"Velox 01": "velox_1.png", "Velox 02": "velox_2.png", "Velox 03": "velox_3.png",
        "Velox 04": "velox_4.png", "Velox 05": "velox_5.png", "Velox 06": "velox_6.png"};
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
                {this.isMobile() ? 
                    this.listLargeSlides()
                    : 
                    this.listSlides()
                }
            </Carousel>
        );
    }
};

export default ImgCarousel