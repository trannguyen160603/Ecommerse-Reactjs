import MainLayout from '@components/Layout/Layout';
import CountdownTimer from '@components/HeadingListProduct/CountdownTimer/CountdownTimer';
import styles from './styles.module.scss'
import MyButton from '@components/Button/Button';
import ProductItem from '@components/ProductItem/ProductItem';

function HeadingListProduct({data}) {
    const targetTime = new Date("2025-12-31T23:59:59Z").getTime();
    const {container, containerItem,containerItemImg, containerTimer ,title, boxBtn} = styles;
    
    
    return <MainLayout>
        <div className={container}>
        <div className={containerItemImg}>
            <div className={containerTimer}>
            <CountdownTimer targetTime={targetTime}/>
            </div>
            <p className={title}>The classics make a comeback</p>
    
            <button className={boxBtn}>Buy Now</button>
            <div>
            </div>
         </div>
        <div className={containerItem} >
            {data.map((item) =>{
                return(
                <ProductItem key={item.id} 
                src={item.images[0]}
                prevSrc={item.images[1]}
                name ={item.name}
                price={item.price}/>);
            })}
            </div>
        </div>
    </MainLayout>;
}

export default HeadingListProduct;