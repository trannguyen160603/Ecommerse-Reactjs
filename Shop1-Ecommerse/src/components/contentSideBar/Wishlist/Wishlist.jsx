import HeaderSideBar from '@components/contentSideBar/HeaderSideBar/HeaderSideBar';
import { BsHeart } from "react-icons/bs";
import styles from './styles.module.scss';
import ItemProduct from '@components/contentSideBar/ItemProduct/ItemProduct';
import MyButton from '@components/Button/Button';
import { faL } from '@fortawesome/free-solid-svg-icons';


function Wishlist() {
    const {container, boxBtn} = styles;

    return <div className={container}>
        <div>
        <HeaderSideBar icon={<BsHeart/>} title='WISHLIST' />
            <ItemProduct/>
        </div>
        <div className={boxBtn}>
            <MyButton content='VIEW WISHLIST'/>
            <MyButton content='ADD ALL TO CART' isPrimary = {false}/>
        </div>
    </div>;
}

export default Wishlist;