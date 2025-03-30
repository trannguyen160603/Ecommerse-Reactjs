import styles from './styles.module.scss';
import { TfiReload } from 'react-icons/tfi';
import { PiShoppingCartLight } from 'react-icons/pi';
import { BsHeart } from 'react-icons/bs';
import { IoEyeOutline } from 'react-icons/io5';
import cls from 'classnames';
import MyButton from '@components/Button/Button';
import { useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import { addProductToCart } from '@/apis/CartService';
import { useNavigate } from 'react-router-dom';
import { handleAddProductToCartCommon } from '@/Untils/helper';

function ProductItem({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomePage = true,
    textCenter
}) {
    const {
        boxImg,
        showImgWhenHover,
        ShowFuncHover,
        boxIcon,
        title,
        prices,
        boxSize,
        size,
        btnCart,
        isActiveSize,
        clearSize,
        containerItem
    } = styles;

    const [sizeChoose, setSizeChoose] = useState('');
    const userId = Cookies.get('userId');
    const { setIsOpen, setType, handleGetListProductCart, setDetailProduct } =
        useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = () => {
        const path = `/product/${details._id}`;
        navigate(path);
    };
    const handleChooseSize = size => {
        setSizeChoose(size);
    };

    const handleClearSize = () => {
        setSizeChoose('');
    };

    const handleShowDetailProductSideBar = () => {
        setIsOpen(true);
        setType('detail');
        setDetailProduct(details);
    };

    const handleAddToCart = async () => {
        handleAddProductToCartCommon(
            userId,
            setIsOpen,
            setType,
            toast,
            sizeChoose,
            details._id,
            1,
            setIsLoading,
            handleGetListProductCart
        );
    };

    return (
        <div className={containerItem}>
            <div className={boxImg}>
                <img src={src} alt='' />
                <img
                    src={prevSrc}
                    alt=''
                    onClick={handleNavigate}
                    className={showImgWhenHover}
                />

                <div className={ShowFuncHover}>
                    <div className={boxIcon}>
                        <PiShoppingCartLight style={{ fontSize: '20px' }} />
                    </div>
                    <div className={boxIcon}>
                        <BsHeart />
                    </div>
                    <div className={boxIcon}>
                        <TfiReload />
                    </div>
                    <div
                        className={boxIcon}
                        onClick={handleShowDetailProductSideBar}
                    >
                        <IoEyeOutline style={{ fontSize: '20px' }} />
                    </div>
                </div>
                {!isHomePage && (
                    <div className={boxSize}>
                        {details?.size?.map((item, index) => (
                            <div
                                onClick={() => handleChooseSize(item.name)}
                                className={cls(size, {
                                    [isActiveSize]: sizeChoose === item.name
                                })}
                                key={index}
                            >
                                {item.name}
                            </div>
                        )) || <div>No size available</div>}
                    </div>
                )}
                {sizeChoose && (
                    <div className={clearSize} onClick={handleClearSize}>
                        Clear
                    </div>
                )}
                <div
                    className={cls(title, textCenter && 'textCenter')}
                    onClick={handleNavigate}
                >
                    {name}
                </div>
                <div style={{ marginTop: '10px' }}>
                    {!isHomePage && (
                        <div
                            style={{
                                textAlign: 'center',
                                fontSize: '14px',
                                color: '#888',
                                marginBottom: '4px'
                            }}
                        >
                            brand 01
                        </div>
                    )}
                    <div className={prices}>${price}</div>
                    {!isHomePage && (
                        <div className={btnCart}>
                            <MyButton
                                onClick={handleAddToCart}
                                disabled={isLoading}
                                content='ADD TO CART'
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
