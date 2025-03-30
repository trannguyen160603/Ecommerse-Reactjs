import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import './styles.css';
import ProductItem from '@components/ProductItem/ProductItem';

function SlideCommon({ data = [], isProductItem = false, showItem = 1 }) {
    if (!Array.isArray(data) || data.length === 0) {
        console.warn("SlideCommon received empty or invalid data:", data);
        return <p>No data available</p>;
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: showItem,
        slidesToScroll: 1,
        nextArrow: <SlArrowRight />,
        prevArrow: <SlArrowLeft />
    };

    return (
        <Slider {...settings}>
            {data.map((item, index) => {
                if (!item) return null;
                const src = item?.image || (item?.images?.length ? item.images[0] : 'fallback-image-url.jpg');

                return isProductItem ? (
                    <ProductItem 
                        key={index}
                        src={src}
                        prev={src}
                        name={item.name || "No Name"}
                        price={item.price || "0"}
                        details={item}
                    />
                ) : (
                    <img key={index} src={src} alt="Product" />
                );
            })}
        </Slider>
    );
}

export default SlideCommon;
