import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

import './styles.css';
function SlideCommon({data}) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SlArrowRight />,
        prevArrow: <SlArrowLeft />
      };
      console.log(data);
      

    return ( 
        <Slider {...settings}>
        {data.map((src, index) =>{
            return <img src={src} key={index} />

        })}
      </Slider>
     );
}

export default SlideCommon;