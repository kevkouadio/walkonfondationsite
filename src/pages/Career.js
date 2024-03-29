

const Career = () => {
    return (
        <div className="container">
            <div className="career-section">
                <h1>Work with Us</h1>
                <h3>Job detail</h3>
                <h6>Part-time, Contract</h6>
                <br />
                <p>
                    The Walk-On Foundation (TWOF) is an organization that engages and advances under-resourced scholars
                    through providing technological resources and skillsets for the purpose of providing a jump start
                    in the exposure to STEM for further education and career interests.
                </p>
                <p>
                    We are looking for a part-time STEM Instructor that will lead the classroom elective for students at
                    the 7th & 8th grade level. This is a great opportunity for an individual looking to expand their knowledge
                    base of front-end development languages. We desire someone who is curious, technically inclined, loves
                    working with children, and loves learning!
                </p>
                <p>The languages we will be leveraging are HTML, CSS, and JavaScript.</p>
                <p>The ideal candidate:</p>
                <ul>
                    <li>Has a background in computer science, education, engineering, mathematics, STEM education, or related field.</li>
                    <li>Strong public speaking & interpersonal skills.</li>
                    <li>Has experience working with children.</li>
                    <li>Has patience, energy, enthusiasm, and be able to provide a supportive and encouraging environment for children.</li>
                    <li>Proficiency with Microsoft PowerPoint, Excel, and Word.</li>
                    <li>Ability to react positively to rapidly changing circumstances & be flexible with schedule.</li>
                    <li>Have high school Diploma.</li>
                </ul>
                <p>Responsibilities Include:</p>
                <ul>
                    <li>Lead curriculum planning, educational instruction, and interpersonal student development.</li>
                    <li>Share responsibility for the quality of the classroom environment and assist in preparation of materials.</li>
                    <li>Work cooperatively with all staff and teaching partners.</li>
                    <li>Gauge student activity and evaluate performance to identify areas for increased engagement.</li>
                    <li>Teach students with dynamic projects, individualized lessons, and a holistic approach.</li>
                    <li>A benevolent approach toward parents and children.</li>
                    <li>Following the curricula and lesson plans</li>
                    <li>Engaging in educational training sessions</li>
                </ul>
                <h5>Qualifications</h5>
                <ul>
                    <li>High school or equivalent (Required)</li>
                    <li>Front-end development: 1 year (Preferred)</li>
                </ul>
                <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Apply</button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Send your application</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div class="col-sm-6">
                                            <label for="exampleFormControlInput1" className="form-label">First Name</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John Doe" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label for="exampleFormControlInput1" className="form-label">Last Name</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John Doe" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="999-999-9999" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Upload your resume</label>
                                        <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Cover Letter</label>
                                        <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                                    </div>
                                    <button type="button" className="btn btn-success">Send </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Career