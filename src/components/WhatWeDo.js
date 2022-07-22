import imgCoding from "../components/images/intro-to-coding.png"
import imgSchoolSup from "../components/images/school-supply.png"
import imgScholarship from "../components/images/scholarship.jpg"

const WhatWeDo = () => {

    return (
        <div className="container" id="what-we-do-section">
            <div className="wrapper" id="what-we-do-wrapper">
                <h1>What we Do</h1>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card whd-card">
                        <img src={imgCoding} className="card-img-top" alt="html-CSS-JS-pic"/>
                            <div className="card-body">
                                <h5 className="card-title">Intro to Coding</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-success">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card whd-card">
                        <img src={imgSchoolSup} className="card-img-top" alt="html-CSS-JS-pic"/>
                            <div className="card-body">
                                <h5 className="card-title">Provide school supplies</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-success">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card whd-card">
                        <img src={imgScholarship} className="card-img-top" alt="html-CSS-JS-pic"/>
                            <div className="card-body">
                                <h5 className="card-title">Scholarships and continued education</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-success">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default WhatWeDo