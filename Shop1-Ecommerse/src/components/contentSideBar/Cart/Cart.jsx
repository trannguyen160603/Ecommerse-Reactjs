import styles from './styles.module.scss';
import HeaderSideBar from '@components/contentSideBar/HeaderSideBar/HeaderSideBar';
import { PiShoppingCartLight } from "react-icons/pi";
import ItemProduct from '@components/contentSideBar/ItemProduct/ItemProduct';
import MyButton from '@components/Button/Button';
import { faL } from '@fortawesome/free-solid-svg-icons';


function Cart() {
    const {container, BoxBtn,total } = styles;
    return <div className={container}>
        <div>
        <HeaderSideBar icon={<PiShoppingCartLight/>} title='CART'/>
        <ItemProduct/>
        </div>

        <div>
        <div className={total}>
            <p>SUBTOTAL:</p>
            <p>$199.999</p>

        </div>

        <div className={BoxBtn}>
            <MyButton content='VIEW CART'/>
            <MyButton content='CHECK OUT' isPrimary ={false}/>
        </div>
        </div>

    </div>;
}

export default Cart