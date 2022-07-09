import imgCoding from "../components/images/intro-to-coding.png"
import imgSchoolSup from "../components/images/school-supply.png"
import imgScholarship from "../components/images/scholarship.jpg"

const WhatWeDo = () => {

    return (
        <div className="container" id="what-we-do-section">
            <div className="wrapper" id="what-we-do-wrapper">
                <h1>What we Do</h1>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card">
                        <img src={imgCoding} class="card-img-top" alt="html-CSS-JS-pic"/>
                            <div class="card-body">
                                <h5 class="card-title">Intro to Coding</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-success">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                        <img src={imgSchoolSup} class="card-img-top" alt="html-CSS-JS-pic"/>
                            <div class="card-body">
                                <h5 class="card-title">Provide school supplies</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-success">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                        <img src={imgScholarship} class="card-img-top" alt="html-CSS-JS-pic"/>
                            <div class="card-body">
                                <h5 class="card-title">Scholarships and continued education</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-success">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default WhatWeDo