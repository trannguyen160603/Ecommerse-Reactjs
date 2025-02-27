import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import logo from '@icon/Images/logo-retina.png';
import reloadIcon from '@icon/svgs/reloadIcon.svg';
import heart from '@icon/svgs/heart.svg';
import cart from '@icon/svgs/cart.svg';


function MyHeader() {
    const { containerBoxIcon, containerMenu, containerHeader, containerBox , boxIconItem, container} =
        styles;
    return (
        <div className={container}>
        <div className={containerHeader}>
            <div className={containerBox}>
                <div className={containerBoxIcon}>
                    {dataBoxIcon.map((item, index) => (
                        <BoxIcon
                            key={index}
                            type={item.type}
                            href={item.href}
                        />
                    ))}
                </div>
                <div className={containerMenu} style={{
                    listStyleType:"none",
                }}> 
                    {dataMenu.slice(0, 3).map(item => {
                        return <Menu content={item.content} href={item.href} />;
                    })}
                </div>
            </div>
            <div>
                <img
                    src={logo}
                    alt='Logo'
                    style={{
                        width: '153px',
                        height: '53px',
                    }}
                />
            </div>
            <div className={containerBox}> 
            <div className={containerMenu}>
                    {dataMenu.slice(3, 6).map(item => {
                        return <Menu content={item.content} href={item.href} />;
                    })}
                </div>

                <div className={containerBoxIcon}>
                    <img className={boxIconItem} src={reloadIcon} alt="reloadIcon" />
                    <img className={boxIconItem} src={heart} alt="heartIcon" />
                    <img className={boxIconItem} src={cart} alt="cartIcon " />
                </div>
            </div>
        </div>
        </div>
    );
}

export default MyHeader;
