import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <footer>
                <section>
                    <article>
                        <h3>
                            HELP
                        </h3>
                        <ul>
                            <li>your email or contact info</li>
                            <li>Call us(?)</li>
                            <li>FAQ/Contact US</li>
                        </ul>
                    </article>
                    <article>
                        <h3>
                            SHOP
                        </h3>
                        <ul><li>do you want this?</li></ul>
                    </article>
                    <article>
                        <h3>
                            COMPANY
                        </h3>
                        <ul>
                            <li>Our Story</li>
                            <li>Our Suppliers</li>
                        </ul>
                    </article>
                    <article>
                        <h3>
                            FOLLOW US ON SOCIAL MEDIA!
                        </h3>
                        <span>
                            Keep yourself updated by following our feed!
                        </span>
                        <ul>

                        </ul>
                        <div className="social-icons-footer">
                            <a href="https://www.instagram.com/uf.velox/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"/></svg></a>

                            <a href="https://www.instagram.com/uf.velox/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                        </div>
                    </article>
                    <article>
                        <h3>
                            APPROVED BY KEMI.SE
                        </h3>
                        <ul>
                            <li>logo?</li>
                        </ul>
                    </article>
                    <article>
                        <h3>
                            SELECT LANGUAGE:
                        </h3>
                        <ul>
                            <li>do you want it too?</li>
                        </ul>
                    </article>
                </section>
            </footer>
        )
    }
}

export default Footer