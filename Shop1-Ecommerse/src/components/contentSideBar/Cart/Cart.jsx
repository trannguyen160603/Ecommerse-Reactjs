import styles from './styles.module.scss';
import HeaderSideBar from '@components/contentSideBar/HeaderSideBar/HeaderSideBar';
import { PiShoppingCartLight } from 'react-icons/pi';
import ItemProduct from '@components/contentSideBar/ItemProduct/ItemProduct';
import MyButton from '@components/Button/Button';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import cls from 'classnames'
import {  useNavigate } from 'react-router-dom';
    // import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function Cart() {
    const { container, BoxBtn, total, containerListProductCart, overlayLoading, isEmpty, boxEmpty, textEmpty, boxBtnEmpty, containerListItem} = styles;
    const { listProductCart , isLoading, setIsOpen} = useContext(SideBarContext);
    const navigate = useNavigate();

    const handleNavigateShop = () =>{
        navigate('/shop');
        setIsOpen(false);
    };
    const subTotal = listProductCart.reduce((acc, item) => {
        return acc + item.total;
    }, 0);
    console.log(subTotal);
    

    return (
        <div className={cls(container, {
            [isEmpty] : !listProductCart.length
        })}>
                <HeaderSideBar icon={<PiShoppingCartLight />} title='CART' />

           {listProductCart.length ?  <div>
            <div className={containerListItem}>
                <div className={containerListProductCart}>
                {listProductCart.map((item, index) => {
                    return (
                        <ItemProduct
                            key={index}
                            src={item.images[0]}
                            nameProduct={item.name}
                            priceProduct={item.price}
                            skuProduct={item.sku}
                            sizeProduct={item.size}
                            quantity={item.quantity}
                            productId={item.productId}
                            userId={item.userId}
                        />
                    );
                })}
                {isLoading && (
                    <div className={overlayLoading}>
                    {/* <LoadingTextCommon/> */}
                </div>
                )}
                </div>
            </div>

            <div>
                <div className={total}>
                    <p>SUBTOTAL:</p>
                    <p>$199.999</p>
                </div>

                <div className={BoxBtn}>
                    <MyButton content='VIEW CART' />
                    <MyButton content='CHECK OUT' isPrimary={false} />
                </div>
            </div>
            </div> : <div className={boxEmpty}>
                <div className={textEmpty}>No product in the cart</div>
                <div className={boxBtnEmpty} onClick={handleNavigateShop}><MyButton  content='RETURN TO SHOP' isPrimary={false} /></div>
            </div> }
            
        </div>
    );
}

export default Cart;
