import styles from './styles.module.scss';
import reloadIcon from '@icon/svgs/reloadIcon.svg';
import heart from '@icon/svgs/heart.svg';
import cart from '@icon/svgs/cart.svg';
import eyeIcon from '@icon/svgs/eyeIcon.svg';
function ProductItem({src, prevSrc, name, price}) {
    const {boxImg, showImgWhenHover, ShowFuncHover, boxIcon, title, prices, } = styles;
    
    return < >
        <div className={boxImg}>
        <img src={src} alt="" />
        <img src={prevSrc} alt="" 
        className={showImgWhenHover}/>

        <div className={ShowFuncHover}>
            <div className={boxIcon}>
            <img src={cart} alt="" />
            </div>
            <div className={boxIcon}>
            <img src={heart} alt="" />
            </div>
            <div className={boxIcon}>
            <img src={reloadIcon} alt="" />
            </div>
            <div className={boxIcon}>
            <img src={eyeIcon} alt="" />
            </div>
        </div>
        <div >
            <div className={title}>{name}</div>
            <div className={prices}>${price}</div>
        </div>
        </div>
    </>;
}

export default ProductItem;