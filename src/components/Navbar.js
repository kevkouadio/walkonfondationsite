import logo from "./images/logo.PNG"

const Nav = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a href="#"><img src={logo} alt="Logo walk on foundation"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Who We Are</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#what-we-do-section">What We Do</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Careers</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Nav
