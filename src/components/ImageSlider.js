import React from 'react'
import Slider from "react-slick";
// import "slick-carousel/";
// import "slick-carousel/slick/slick-theme.css";



const ImageSlider = ({ images }) => {

  const settings = {
    infinite: true,
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3000,

  };
  console.log(images)
  return (
    <>
      <div className="imgslider">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <figure class="textcenter">
                <img src={item.src} alt={item.alt} />
                <figcaption>
                  <h5>{item.title}</h5>
                  <p>{item.summary}</p>
                </figcaption>
              </figure>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}
export default ImageSlider;