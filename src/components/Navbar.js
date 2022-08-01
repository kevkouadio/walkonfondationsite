import { useState } from "react";
import logo from "./images/logo.PNG";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Nav = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggler = () => {
        if (isExpanded) {
            setIsExpanded(false);
            return
        }
        setIsExpanded(true);
    };
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to="/"><img src={logo} alt="Logo walk on foundation" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={isExpanded ? "collapse navbar-collapse justify-content-end" : "collapse navbar-collapse justify-content-end hide"} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={handleToggler}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to="/#who-we-are-section" onClick={handleToggler}>Who We Are</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to="/#what-we-do-section" onClick={handleToggler}>What We Do</HashLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={handleToggler}>Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/career" onClick={handleToggler}>Career</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Nav
