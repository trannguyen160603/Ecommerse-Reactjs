import MainLayout from '@components/Layout/layout';
import Header from '@components/Header/Header'
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from '@pages/OurShop/components/Banner';
import Filter from '@pages/OurShop/components/Filter';
import { OurShopProvider } from '@/contexts/OurShopProvider';
import ListProduct from '@pages/OurShop/components/ListProduct';
import Footer from '@components/Footer/Footer'
function OurShop() {
    const {container, functionBox, btnBack} = styles;
    const navigate = useNavigate();

    const handleBackPreviousPage = (() =>{
        navigate(-1);
    })
    return <OurShopProvider>
    <Header/>
    <MainLayout>
        <div className={container}>
            <div className={functionBox}>
            <div> <span onClick={(() => handleBackPreviousPage())} style={{cursor:'pointer'}} >Home</span> &gt; <strong style={{color:'#333', fontWeight:'350'   }}>Shop</strong></div>
            <div className={btnBack} onClick={(() => handleBackPreviousPage())}>&lt; Return to previous page</div>
            </div>
            <Banner/>
            <Filter/>
            <ListProduct/>
        </div>
    </MainLayout>
            <Footer/>
    </OurShopProvider>;
}

export default OurShop;