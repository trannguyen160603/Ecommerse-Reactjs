import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider'; // Import Context
import { useContext, useState } from 'react';
import { StoreContext } from '@/contexts/storeProvider';
import cls from 'classnames';
import { useNavigate } from 'react-router-dom';
function Menu({ content, href, isFooter }) {
    const { menu, subMenu, menuFooter} = styles;
    const { userInfo, handleLogOut } = useContext(StoreContext);
    const { setIsOpen, setType } = useContext(SideBarContext); // Lấy từ Context
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);
    const navigate = useNavigate();


    const handleClickShowLogin = () => {
        if (content === 'Sign in' && !userInfo) {
            setType('login'); // Thay đoi type của SidebarProvider để hiển thị Login Sidebar
            setIsOpen(true); // Mở Sidebar  // chuyển sang SidebarProvider.jsx và SideBarProvider.jsx để xử lý
        }
        if(content === 'Our Shop'){
            navigate('/Shop')
        }
        if(content === 'About Us'){
            navigate('/about-us')
        }
    };

    const handleRenderText = () => {
        if (content === 'Sign in' && userInfo) {
            return `Hello: ${userInfo?.username}`;
        } else {
            return content;
        }        
    };

    const handleHover = () => {
        if (content === 'Sign in' && userInfo) {
            setIsShowSubMenu(true);
        }
    };

    
    return (
        <div
            // className={`${menu} ${isFooter ? menuFooter : ''}`}
            className={cls(menu, {
                [menuFooter] : isFooter
            })}
            href={href}
            onMouseEnter={handleHover}
            onClick={handleClickShowLogin}
        >
            {handleRenderText(content)}

            {isShowSubMenu && (
                <div
                    onMouseLeave={() => setIsShowSubMenu(false)}
                    className={subMenu}
                    onClick={handleLogOut}
                >Log out</div>
            )}
        </div>
    ); // ✅ Chỉ render chuỗi
}
export default Menu;
