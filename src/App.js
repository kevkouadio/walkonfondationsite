
import React, { useState } from 'react'
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Navbar';
import Slider from './components/ImageSlider';
import WhatWeDo from './pages/WhatWeDo';
import ImageSlider from './components/ImageSlider';
import images from './components/images';

function App() {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="App">
      <Nav />
      <ImageSlider images={images} />
      <WhatWeDo />
      <Footer />
      <button type="button" className="btn btn-success"
        id='scrollToTop-btn' onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}><i className="fa-solid fa-arrow-up"></i></button>
    </div>
  );
}

export default App;
