import logo from "./images/favicon.png"
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
                                <h4>Contact Us</h4>
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
                                <h4>links</h4>
                                <div className="footer-c-info">
                                    <span className="f-c-text"><a className="text-decoration-none" href="">Home</a></span>
                                </div>
                                <div className="footer-c-info">
                                    <span className="f-c-text"><a className="text-decoration-none" href="">Who We Are</a></span>
                                </div><div className="footer-c-info">
                                    <span className="f-c-text"><a className="text-decoration-none" href="">What We Do</a></span>
                                </div>
                                <div className="footer-c-info">
                                    <span className="f-c-text"><a className="text-decoration-none" href="">Contact Us</a></span>
                                </div>
                                <div className="footer-c-info">
                                    <span className="f-c-text"><a className="text-decoration-none" href="">Careers</a></span>
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