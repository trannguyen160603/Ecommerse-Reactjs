import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import './styles.css';
import ProductItem from '@components/ProductItem/ProductItem';
function SlideCommon({ data, isProductItem = false, showItem = 1}) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: showItem,
        slidesToScroll: 1,
        nextArrow: <SlArrowRight />,
        prevArrow: <SlArrowLeft />
    };
    console.log(data);

    return (
        <Slider {...settings}>
            {data.map((item, index) => {
              const src = !item.image ? item.images[0] : item.image;
                return (
                    <>
                        {isProductItem ? (
                            <ProductItem 
                            src={src}
                            prev={src}
                            name={item.name}
                            price={item.price}
                            details ={item}
                            />
                        ) : (
                            <img src={src} key={index} />
                        )}
                    </>
                );
            })}
        </Slider>
    );
}

export default SlideCommon;
