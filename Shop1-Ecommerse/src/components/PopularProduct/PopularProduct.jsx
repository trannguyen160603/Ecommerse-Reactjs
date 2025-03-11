import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';

function PopularProduct({data}) {
    return <>
    <MainLayout>
    <div className={styles.container}>
        {data.map((item) => {
            return (
                <ProductItem 
                key={item.id}
                src={item.images[0]} 
                prevSrc={item.images[1]} 
                name={item.name} 
                price={item.price}/>
            );
            })}
        
    </div>
    </MainLayout>
    </>;
}

export default PopularProduct;