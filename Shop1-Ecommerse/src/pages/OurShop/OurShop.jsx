import MainLayout from '@components/Layout/layout';
import Header from '@components/Header/Header'
import styles from './styles.module.scss';
import Banner from '@pages/OurShop/components/Banner';
import Filter from '@pages/OurShop/components/Filter';
import { OurShopProvider } from '@/contexts/OurShopProvider';
import ListProduct from '@pages/OurShop/components/ListProduct';
import Footer from '@components/Footer/Footer'
import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
function OurShop() {
    const {container } = styles;

    return <OurShopProvider>
    <Header/>
    <MainLayout>
        <div className={container}>
            <Breadcrumb namePage="Shop" onClickPage={''}/>
            <Banner/>
            <Filter/>
            <ListProduct/>
        </div>
    </MainLayout>
            <Footer/>
    </OurShopProvider>;
}

export default OurShop;