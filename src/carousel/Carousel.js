import React, { Component } from 'react';

class Carousel extends Component {
    constructor() {
        super();
        this.state = {}
    }


    render() {
        return ( 
            <div className="carousel-wrapper">
                <section class="carousel">
                    <nav />
                    <div class="slide-container">
                        <div class="slide">
                            <img src="public/product/bottle.jpg" />
                            <a class="prev">&#10094;</a>
                            <a class="next">&#10095;</a>
                        </div>
                        <div class="slide">
                            <img src="public/product/set.jpg" />
                        </div>
                        <div class="slide">
                            <img src="public/product/cure.jpg" />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Carousel