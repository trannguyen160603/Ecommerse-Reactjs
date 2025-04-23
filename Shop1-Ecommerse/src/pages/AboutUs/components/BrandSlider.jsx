import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles.module.scss';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import '../styles.css';


function BrandSlider() {
    const {sliderContainer, slide} = styles;
    const brands = [
        { id: 1, image: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png" },
        { id: 2, image: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-03-min.png" },
        { id: 3, image: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-02-min.png" },
        { id: 4, image: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-04-min.png" },
        { id: 5, image: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-05-min.png" },
      ];    

      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SlArrowRight />,
        prevArrow: <SlArrowLeft />,
        
      };
    return ( 
        <div className={sliderContainer}>
            <Slider {...settings}>
                {brands.map((brand) =>{
                    return <div key={brand.id} className={slide}>
                        <img src={brand.image} alt={`brand ${brand.id}`}/>
                    </div>
                })}
            </Slider>
        </div>
     );
}

export default BrandSlider;