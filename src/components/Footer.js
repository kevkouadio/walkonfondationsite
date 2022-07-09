import logo from "./images/favicon.png"
const Footer = () => {

    return (
        <footer class="footer-area">
            <div class="footer-top bg-dark-blue">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="single-footer-widget">
                                <div class="footer-logo">
                                    <a href="#"><img src={logo} alt="logo" /></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="single-footer-widget">
                                <h4>Contact Us</h4>
                                <div class="footer-c-info">
                                    <span class="f-c-icon"><i class="fa fa-home"></i> </span>
                                    <span class="f-c-text">Your address goes here.</span>
                                </div>
                                <div class="footer-c-info">
                                    <span class="f-c-icon"><i class="fa fa-envelope-open"></i> </span>
                                    <span class="f-c-text">demo@example.com<br /> <i class="fa-solid fa-globe"></i> www.example.com</span>
                                </div>
                                <div class="footer-c-info">
                                    <span class="f-c-icon"><i class="fa-solid fa-phone"></i> </span>
                                    <span class="f-c-text">(+0123456789)</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="single-footer-widget">
                                <h4>links</h4>
                                <div class="footer-c-info">
                                    <span class="f-c-text"><a class="text-decoration-none" href="">Home</a></span>
                                </div>
                                <div class="footer-c-info">
                                    <span class="f-c-text"><a class="text-decoration-none" href="">Who We Are</a></span>
                                </div><div class="footer-c-info">
                                    <span class="f-c-text"><a class="text-decoration-none" href="">What We Do</a></span>
                                </div>
                                <div class="footer-c-info">
                                    <span class="f-c-text"><a class="text-decoration-none" href="">Contact Us</a></span>
                                </div>
                                <div class="footer-c-info">
                                    <span class="f-c-text"><a class="text-decoration-none" href="">Careers</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom bg-dark-blue-2">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <span class="footer-text">
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