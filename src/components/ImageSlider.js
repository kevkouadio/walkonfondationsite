import React from 'react'
import Slider from "react-slick";


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
  return (
    <>
      <div className="imgslider">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <figure className="textcenter">
                <img src={item.src} alt={item.alt} />
                <figcaption>
                  <h1>{item.title}</h1>
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