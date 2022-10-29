import React from 'react'
import { SliderStyle } from './ImageSlider.styles'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from './Image';
  
const ImageSlider = () => {
  
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 2000,
   
  };
  return (
    <SliderStyle>
    <div className="container tag">
          <h1 className='heading-secondary'>Meals Gallery</h1>
    </div>
      <div className="container imgslider">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img src={item.src}  alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </SliderStyle>
  )
}
export default ImageSlider;