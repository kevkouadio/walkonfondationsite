
const ContactUs = () => {
    return (
        <div className="container">
            <div className="contact-section">
                <h1>Contact The Walk-On Foundation</h1>
                <form>
                    <div className="row">
                        <div class="col-sm-6">
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John Doe" />
                        </div>
                        <div className="col-sm-6">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="999-999-9999" />
                        </div>
                        <div className="col-sm-6">
                            <label for="exampleFormControlInput1" className="form-label">Address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="123 ST. New York, NY" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Subject</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Subject" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Your Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs