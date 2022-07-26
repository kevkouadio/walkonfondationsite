import logo from "./images/favicon.png";
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="footer-top bg-dark-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="single-footer-widget">
                                <div className="footer-logo">
                                    <a href="#"><img src={logo} alt="logo" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="single-footer-widget">
                                <h3>Contact Us</h3>
                                <div className="footer-c-info">
                                    <span className="f-c-icon"><i className="fa fa-home"></i> </span>
                                    <span className="f-c-text">Your address goes here.</span>
                                </div>
                                <div className="footer-c-info">
                                    <span className="f-c-icon"><i className="fa fa-envelope-open"></i> </span>
                                    <span className="f-c-text">demo@example.com<br /> <i className="fa-solid fa-globe"></i> www.example.com</span>
                                </div>
                                <div className="footer-c-info">
                                    <span className="f-c-icon"><i className="fa-solid fa-phone"></i> </span>
                                    <span className="f-c-text">(+0123456789)</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="single-footer-widget">
                                <h3>Links</h3>
                                <div className="footer-c-info">
                                    <span className="f-c-text"><Link to="/">Home</Link></span>
                                </div>
                                <div className="footer-c-info">
                                    <span className="f-c-text"><HashLink to="/#who-we-are-section">Who We Are</HashLink></span>
                                </div><div className="footer-c-info">
                                    <span className="f-c-text"><HashLink to="/#what-we-do-section">What We Do</HashLink></span>
                                </div>
                                <div className="footer-c-info">
                                    <span className="f-c-text"><Link to="/contact">Contact Us</Link></span>
                                </div>
                                <div className="footer-c-info">
                                    <span className="f-c-text"><Link to="/career">Career</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom bg-dark-blue-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <span className="footer-text">
                                ©  2022 Theme made with ❤️ by <a href="#">The Walk On Foundation</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer