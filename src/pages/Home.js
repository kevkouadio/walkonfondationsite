
import React, { useState } from 'react'
// import './App.css';
import Footer from '../components/Footer';
import Nav from '../components/Navbar';
import WhatWeDo from '../components/WhatWeDo';
import ImageSlider from '../components/ImageSlider';
import images from '../components/images';
import WhoWeAre from '../components/WhoWeAre';


const Home = () => {


  return (
      <div className="App">
        <ImageSlider images={images} />
        <WhoWeAre />
        <WhatWeDo />
        <Footer />
      </div>
  );
}

export default Home;
