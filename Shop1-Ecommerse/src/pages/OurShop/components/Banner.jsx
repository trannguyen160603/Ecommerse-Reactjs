import MyButton from '@components/Button/Button';
import styles from '../styles.module.scss';
import CountdownTimer from '@components/HeadingListProduct/CountdownTimer/CountdownTimer';


function Banner() {
    const targetTime = new Date("2025-12-31T23:59:59Z").getTime();
    const { containerBanner, containerBox, containerTimer, title, boxBtn } = styles;

    

    return (
        <>
            <div className={containerBanner}>
                <div className={containerBox}>
                    <div className={containerTimer}>
                        <CountdownTimer targetTime={targetTime} />
                    </div>
                    <div className={title}>The classics make a comeback</div>
                    <div className={boxBtn}><MyButton content='Buy Now'/></div>
                </div>
            </div>
        </>
    );
}

export default Banner;
