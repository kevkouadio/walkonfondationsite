
import React, { useState } from 'react'
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';


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
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
        <button type="button" className="btn btn-success"
          id='scrollToTop-btn' onClick={scrollToTop}
          style={{ display: visible ? 'inline' : 'none' }}><i className="fa-solid fa-arrow-up"></i></button>
      </div>

    </Router>
  );
}

export default App;
