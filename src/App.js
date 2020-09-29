import React from 'react';
import './style.css';
import Header from './navbar/Header'
import MainContainer from './container/MainContainer'
import Footer from './footer/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
