import styles from './styles.module.scss';
import HeaderSideBar from '@components/contentSideBar/HeaderSideBar/HeaderSideBar';
import { TfiReload } from "react-icons/tfi";
import ItemProduct from '@components/contentSideBar/ItemProduct/ItemProduct';
import MyButton from '@components/Button/Button';
function Compare() {
    const { container, boxContent, compareBtn } = styles;
    return <div className={container}> 
       <div className={boxContent}>
        <HeaderSideBar icon={<TfiReload/>} title='COMPARE' />
        <ItemProduct/>
        </div>
        <div className={compareBtn} >
        <MyButton content='VIEW COMPARE' />
        </div>



    </div>;
}

export default Compare;