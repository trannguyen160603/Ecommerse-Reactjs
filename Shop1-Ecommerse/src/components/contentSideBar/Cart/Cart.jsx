import styles from './styles.module.scss';
import HeaderSideBar from '@components/contentSideBar/HeaderSideBar/HeaderSideBar';
import { PiShoppingCartLight } from 'react-icons/pi';
import ItemProduct from '@components/contentSideBar/ItemProduct/ItemProduct';
import MyButton from '@components/Button/Button';
import { useContext, useEffect } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import cls from 'classnames';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const {
        container,
        BoxBtn,
        total,
        containerListProductCart,
        overlayLoading,
        isEmpty,
        boxEmpty,
        textEmpty,
        boxBtnEmpty,
        containerListItem
    } = styles;

    const { listProductCart, isLoading, setIsOpen } = useContext(SideBarContext);
    const navigate = useNavigate();

    useEffect(() => {
        
    }, [listProductCart]);

    const handleNavigateShop = () => {
        navigate('/shop');
        if (setIsOpen) {
            setIsOpen(false);
        }
    };
    const handleNavigateCart = () =>{
        navigate('/cart');
        if (setIsOpen) {
            setIsOpen(false);
        }
    }

    const subTotal = listProductCart.reduce(
        (acc, item) => acc + (item.price * item.quantity || 0),
        0
    );

    return (
        <div
            className={cls(container, {
                [isEmpty]: !isLoading && listProductCart.length === 0
            })}
        >
            <HeaderSideBar icon={<PiShoppingCartLight />} title='CART' />

            {isLoading ? (
                <p>Loading cart...</p>
            ) : listProductCart.length > 0 ? (
                <div>
                    <div className={containerListItem}>
                        <div className={containerListProductCart}>
                            {listProductCart.map((item, index) => (
                                <ItemProduct
                                    key={index}
                                    src={item.images?.[0] || ''}
                                    nameProduct={item.name}
                                    priceProduct={item.price}
                                    skuProduct={item.sku}
                                    sizeProduct={item.size}
                                    quantity={item.quantity}
                                    productId={item.productId}
                                    userId={item.userId}
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className={total}>
                            <p>SUBTOTAL:</p>
                            <p>${subTotal.toFixed(2)}</p>
                        </div>

                        <div className={BoxBtn}>
                            <MyButton  content={'VIEW CART'}   onClick={handleNavigateCart}/>
                            <MyButton content='CHECK OUT' isPrimary={false} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={boxEmpty}>
                    <div className={textEmpty}>No product in the cart</div>
                    <div className={boxBtnEmpty} onClick={handleNavigateShop}>
                        <MyButton content='RETURN TO SHOP' isPrimary={false} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
