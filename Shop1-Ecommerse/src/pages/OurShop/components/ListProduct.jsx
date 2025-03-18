import MainLayout from '@components/Layout/layout';
import { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from '../styles.module.scss';

function ListProduct() {
    const {containerProduct} = styles;
    const { products } = useContext(OurShopContext);

    return (
        <>
            <MainLayout>
                <div className={containerProduct}>
                    {products.map(item => (
                        <ProductItem
                            key={item.id}
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            name={item.name}
                            price={item.price}
                            details ={item}
                            isHomePage = {false}
                        />
                    ))}
                </div>
            </MainLayout>
        </>
    );
}

export default ListProduct;
