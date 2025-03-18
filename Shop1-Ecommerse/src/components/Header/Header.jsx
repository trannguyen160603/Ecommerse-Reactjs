import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import logo from '@icon/Images/logo-retina.png';
import { TfiReload } from "react-icons/tfi";
import { PiShoppingCartLight } from "react-icons/pi";
import { BsHeart } from "react-icons/bs";

import useScrollHandling from '@/Hooks/useScrollHandling';
import { useEffect, useState, useContext } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBarProvider';
function MyHeader() {
    const { containerBoxIcon, containerMenu, containerHeader, containerBox , boxIconItem, container, topHeader, fixedHeader, boxCart, quantity} =
        styles;

        const {scrollPosition} = useScrollHandling();
        const [fixedPosition, seFixedPosition] = useState(false);
        //biến bật tắt sidebar
        const { isOpen, setIsOpen, type, setType, listProductCart } = useContext(SideBarContext);

        const handleOpenSideBar = (type) =>{
            setIsOpen(true);
            setType(type);
        }

        useEffect(() =>{
                seFixedPosition(scrollPosition > 80 ? true : false);
        }, [scrollPosition]);
    return (
        <div className={classNames(container, topHeader,{
            [fixedHeader]: fixedPosition  // Nếu fixedPosition = true thì class fixedHeader sẽ được thêm vào containerHeader
        })}>
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
                        return <Menu content={item.content} href={item.href} setIsOpen={setIsOpen}/>;
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
                    <TfiReload style={{fontSize:"20px", cursor:"pointer"}}
                    onClick={() => handleOpenSideBar('compare')}
                    />
                    <BsHeart style={{fontSize:"20px",  cursor:"pointer"}}
                    onClick={() => handleOpenSideBar('Wishlist')}
                    />
                    <div className={boxCart}>
                    <PiShoppingCartLight style={{fontSize:"25px" ,cursor:"pointer"}}
                    onClick={() => handleOpenSideBar('cart')}  // Click vào Cart Icon để mở Sidebar với type = cart  // chuyển sang SidebarProvider.jsx và SideBarProvider.jsx để xử lý
                    />
                    <div className={quantity}>{listProductCart.length}</div>
                </div>
                    </div>
            </div>
        </div>
        </div>
    );
}

export default MyHeader;
