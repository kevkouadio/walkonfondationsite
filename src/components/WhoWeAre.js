

const WhoWeAre = () => {

    return (
        <div className="container-fluid" id="who-we-are-section">
            <div className="wrapper" id="who-we-are-wrapper">
                <div className="row">
                    <div className="col-sm-6" id="description-div">
                       <h1>Who We Are</h1>
                       <br/>
                       <br/> 
                        <p>
                            The Walk-On Foundation is an initiative that engages and advances under-resourced youth through
                            providing technological resources and skillsets for the purpose of providing a jump-start in
                            the exposure to STEM for further education and career interests.
                        </p> 
                    </div>
                    <div className="col-sm-6" id="video-Div">
                        <iframe
                            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title="video"
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default WhoWeAre