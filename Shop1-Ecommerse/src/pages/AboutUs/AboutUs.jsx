import MainLayout from "@components/Layout/Layout";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import MyHeader from "@components/Header/Header";
import styles from './styles.module.scss';
import ImageGallery from "@pages/AboutUs/components/ImageGallery";
import BrandSlider from "@pages/AboutUs/components/BrandSlider";
import Title from "@pages/AboutUs/components/title";
import MyFooter from "@components/Footer/Footer";
import AccordionQuestion from "@pages/AboutUs/components/AccordionQuestion";

function AboutUs() {
    const {container} = styles;
    return ( 
        <div>
            <MyHeader/>
            <MainLayout>
                <div className={container}>
            <Breadcrumb namePage="About Us" onClickPage={''}/>
            <Title titleFirt="WE TRY OUR BEST FOR YOU" titleSecond="Welcome to the Marseille04 Shop"/>
            <ImageGallery/>
            <BrandSlider/>
            <Title titleFirt="WE ARE HAPPY TO HELP YOU" titleSecond="Have Any Questions?"/>
            <AccordionQuestion/>

                </div>
            </MainLayout>
            <MyFooter/>
            </div>
     );
}

export default AboutUs;
