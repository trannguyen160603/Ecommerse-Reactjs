import styles from './styles.module.scss';
import { IoCloseOutline } from "react-icons/io5";


function ItemProduct() {
    const {title, price, container, boxContent, boxClose, size} = styles;
    return <div className={container}>
        <img src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min.jpg" alt="" />
        <div className={boxClose}> <IoCloseOutline/></div>
        <div className={boxContent}>  
            <div className={title}>10k Yellow Gold</div>
            <div className={size}>Size:M</div>
            <div className={price}>$199.999</div>
            <div className={price}>SKU: 12347</div>
        </div>

    </div>;
}

export default ItemProduct;