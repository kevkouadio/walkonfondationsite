import logo from "./images/logo.PNG";
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Nav = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a href="#"><img src={logo} alt="Logo walk on foundation" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <HashLink className="nav-link" to="/#who-we-are-section">Who We Are</HashLink>
                        </li>
                        <li className="nav-item">
                        <HashLink className="nav-link" to="/#what-we-do-section">What We Do</HashLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/career">Career</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Nav
