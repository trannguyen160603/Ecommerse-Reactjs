import styles from './styles.module.scss';
import HeaderSideBar from '@components/contentSideBar/HeaderSideBar/HeaderSideBar';
import { PiShoppingCartLight } from 'react-icons/pi';
import ItemProduct from '@components/contentSideBar/ItemProduct/ItemProduct';
import MyButton from '@components/Button/Button';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function Cart() {
    const { container, BoxBtn, total, containerListProductCart, overlayLoading} = styles;
    const { listProductCart , isLoading} = useContext(SideBarContext);


    return (
        <div className={container}>
            <div>
                <HeaderSideBar icon={<PiShoppingCartLight />} title='CART' />

                {isLoading ? (<LoadingTextCommon/> ) : (
                    listProductCart.map((item, index) => {
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
                    })
                )}
                
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
            
        </div>
    );
}

export default Cart;
