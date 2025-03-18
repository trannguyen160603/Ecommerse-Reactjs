import styles from './styles.module.scss';
import reloadIcon from '@icon/svgs/reloadIcon.svg';
import heart from '@icon/svgs/heart.svg';
import cart from '@icon/svgs/cart.svg';
import eyeIcon from '@icon/svgs/eyeIcon.svg';
import cls from 'classnames';
import MyButton from '@components/Button/Button';
import { useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import { addProductToCart } from '@/apis/CartService';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
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
    const { setIsOpen, setType, handleGetListProductCart } = useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const [ isLoading, setIsLoading ] = useState(false);

    const handleChooseSize = size => {
        setSizeChoose(size);
    };

    const handleClearSize = size => {
        setSizeChoose('');
    };

    const handleAddToCart = async () => {
        if (!userId) {
            setIsOpen(true);
            setType('login');
            toast.warning('Please login to add products to cart!');
            return;
        }

        if (!sizeChoose) {
            toast.warning('Please choose size');
            return;
        }

        const data = {
            userId,
            productId: details?._id || '',
            quality: 1,
            size: sizeChoose
        };
        console.log(data);
        
        setIsLoading(true);
        addProductToCart(data)
            .then(res => {
                toast.success('Product added to cart successfully!');
                setIsOpen(true);
                setType('cart');
                setIsLoading(false);
                handleGetListProductCart(userId,'cart');
            })
            .catch(err => {
                toast.error('Failed to add product to cart');
                setIsLoading(false);
            });
    };

    return (
        <div className={containerItem}>
            <div className={boxImg}>
                <img src={src} alt='' />
                <img src={prevSrc} alt='' className={showImgWhenHover} />

                <div className={ShowFuncHover}>
                    <div className={boxIcon}>
                        <img src={cart} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heart} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={eyeIcon} alt='' />
                    </div>
                </div>
                {!isHomePage && (
                    <div className={boxSize}>
                        {details?.size?.map((item, index) => (
                            <div
                                onClick={() => {
                                    handleChooseSize(item.name);
                                }}
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
                    <div
                        className={clearSize}
                        onClick={() => {
                            handleClearSize();
                        }}
                    >
                        clear
                    </div>
                )}
                <div className={cls(title, textCenter && 'textCenter')}>
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
                                disabled={isLoading} // Ngăn bấm nút khi đang loading
                                content={
                                    isLoading ? (
                                        <LoadingTextCommon />
                                    ) : (
                                        'ADD TO CART'
                                    )
                                }
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
