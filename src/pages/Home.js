import React, { useState } from 'react'
// // import './App.css';
// import Footer from '../components/Footer';
// import Nav from '../components/Navbar';
import WhatWeDo from '../components/WhatWeDo';
import ImageSlider from '../components/ImageSlider';
import images from '../components/images';
import WhoWeAre from '../components/WhoWeAre';


const Home = () => {

  return (
      <div>
        <ImageSlider images={images} />
        <WhoWeAre />
        <WhatWeDo />
      </div>
  );
}

export default Home;
