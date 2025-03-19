import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import classNames from 'classnames';
import { IoCloseOutline } from 'react-icons/io5';
import Login from '@components/contentSideBar/Login/Login';
import Compare from '@components/contentSideBar/Compare/Compare';
import Wishlist from '@components/contentSideBar/Wishlist/Wishlist';
import Cart from '@components//contentSideBar/Cart/Cart';
import DetailProduct from '@components/contentSideBar/DetailProduct/DetailProduct';
function Sidebar() {
    const { container, sidebar, overlay, slideSidebar, boxIcon } = styles;
    const { isOpen, setIsOpen, type } = useContext(SideBarContext);
    const handleTongle = () => {
        setIsOpen(!isOpen);
    };

    const handleRenderContent = () => {
        switch (type) {
            case 'login':
                return <Login />;
            case 'compare':
                return <Compare/>;
            case 'Wishlist':
                return <Wishlist/>;
            case 'cart':
                return <Cart/>;
            case 'detail':
                return <DetailProduct/>;
            default:
                return null;
        }
    };
    return (
        <div className={container}>
            <div
                className={classNames({ [overlay]: isOpen })}
                onClick={handleTongle}
            ></div>
            <div className={classNames(sidebar, { [slideSidebar]: isOpen })}>
                {isOpen && (
                    <div>
                        <IoCloseOutline
                            className={boxIcon}
                            onClick={handleTongle}
                        />
                    </div>
                )}
                {handleRenderContent()}
            </div>
        </div>
    );
}

export default Sidebar;
