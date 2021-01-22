import React, { Component } from 'react';
import './Home.css'
import ImgCarousel from '../carousel/Carousel';

class Home extends Component {
    constructor() {
        super();
        this.state = {}

    }

    render() {
        return (
            <div className="main-container">
                <header>
                    <h1>Velox</h1>
                    <p>Effektiv skorengöring</p>
                </header>

                <ImgCarousel />

                <section>

                    <article>
                        <span>Vår produkt</span>
                        <p>
                            Velox skorengöring är ett högeffektivt rengöringsmedel.
                            <br/>
                            <br/>
                            Produkten är designad att användas på vardagliga skor men fungerar på krosstövlar, ridstövlar, fotbollsskor samt andra föremål av textilliknande material. Vår premium formula framtagen i samarbete med det populära företaget Tershine innehåller också en odör blockerande funktion som fräschar upp dålig lukt i skorna.
                        </p>
                    </article>

                    <article>
                        <span>Användning</span>
                        <p>
                            En viktig del för oss som företag är att vår produk ska vara smidig och enkel att ta med sig. Man ska alltså kunna använda vårt rengöringsmedel efter en lång promenad till jobbet, innan den stora dejten eller bara hemma på diskbänken. För att underlätta för dig som kund ingår en högteknologisk mikrofiberduk som applicerar medlet och absorberar smutsen.
                            <br/>
                            <br/>
                            Produktanvändning:
                            Skaka flaskan och använd sedan produkten på den smutsiga skon (anpassa mängden efter hur smutsig skon är).

                            <br/>
                            <br/>
                            Använd medförande mikrofiberduk alternativt valfri borste för rengöring.

                            <br/>
                            <br/>
                            Låt medlet verka i några minuter och torka sedan av skon med mikrofiberduken.

                            <br/>
                            <br/>
                            Experience the difference!
                        </p>
                    </article>

                    <article>
                        <span>Beställning och pris</span>
                        <p>
                            Vid intresse av köp maila <a href="mailto:uf.velox@gmail.com">uf.velox@gmail.com</a> och inkuldera följande information:
                            <br/>
                            För- och efternamn
                            <br/>
                            Fullständig adress
                            <br/>
                            Antalet flaskor
                            <br/>
                            <br/>

                            Pris per flaska 250 milliliter: 149 kronor
                            <br/>
                            <br/>

                            Betalning sker enklast via Swish: 123 153 72 32
                            <br/>
                            (Inkludera För- och efternamn i meddelande på Swish)

                        </p>
                    </article>

                    <article>
                        <span>
                            Information
                        </span>
                        <p>
                            </p>
                    </article>
                </section>

{/*
                <div className="col col-1 col-bg">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div> */}
            </div>
        )
    }
}

export default Home