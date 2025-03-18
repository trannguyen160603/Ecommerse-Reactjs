import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import Footer from '@components/Footer/Footer';

import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
import { useEffect, useState } from 'react';
import {getProduct} from '@/apis/productService';

function HomePage() {
    const [listProduct, setListProduct] = useState([]); 
    useEffect(() =>{
        const query = {
            sortType: 0,
            page:1,
            limit:10
        };
        getProduct(query).then((res) =>{
            setListProduct(res.contents);
        });
    }, [])

    const {container } = styles;
    return (  
        <>
            <div className={container}>
                <MyHeader/>
                <Banner/>       
                <Info/>
                <AdvanceHeadling />  
                <HeadingListProduct data ={listProduct.slice(0,2)}/>  
                <PopularProduct data={listProduct.slice(2,10)}/>
                <SaleHomePage/>
                <Footer/>
          </div>
        </>
    );
}

export default HomePage;