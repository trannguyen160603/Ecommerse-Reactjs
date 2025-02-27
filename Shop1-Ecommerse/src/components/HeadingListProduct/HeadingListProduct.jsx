import MainLayout from '@components/Layout/Layout';
import CountdownTimer from '@components/HeadingListProduct/CountdownTimer/CountdownTimer';
import styles from './styles.module.scss'
import MyButton from '@components/Button/Button';
function HeadingListProduct() {
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
        <div className={containerItem}>
        <div>1</div>
        <div>2</div>
        </div>
        </div>
    </MainLayout>;
}

export default HeadingListProduct;