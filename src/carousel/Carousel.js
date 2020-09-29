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
                            <img src="public/product/bottle.jpg" alt="Product - Bottle" />
                            <div class="prev">&#10094;</div>
                            <div class="next">&#10095;</div>
                        </div>
                        <div class="slide">
                            <img src="public/product/set.jpg" alt="Product - Set" />
                        </div>
                        <div class="slide">
                            <img src="public/product/cure.jpg" alt="Product - Cure" />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Carousel