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
        const images = {"Product - bottle": "velox_01 (2).png", "Product - set": "velox_02.png"};
        const keys = Object.keys(images)
        return keys.map((key, index) => {
            return (
                <Slide key = {index} alt = {key} img = {images[key]} />
            )
        })
    }

    listLargeSlides() {
        const images = {"Product - bottle 1": "bottle.png", "Product - bottle 2": "bottle_2.png", "Product - bottle 3": "bottle_3.png",
        "Velox bottles(1)": "velox_4.png", "Velox bottles(2)": "velox_5.png", "Velox bottles(3)": "velox_6.png"};
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