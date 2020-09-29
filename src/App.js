import React from 'react';
import './style.css';

function App() {

  return (
    <div className="App">
      <header id="navbar">
            <div class="top-menu mobile" id="top-menu-mobile">
                <div></div>
                <div class="logo">velox</div>
                <div class="icon" id="ham">
                    <div class="hamburger"></div>
                </div>
            </div>
            <div class="top-menu desktop" id="top-menu-desktop">
                <div></div>
                <div class="logo">velox</div>
                <div class="info">
                    <h4 class="about-header">About us</h4>
                    <h4 class="contact-header">Contact</h4>
                </div>
            </div>
        </header>
    </div>
  );
}

export default App;
