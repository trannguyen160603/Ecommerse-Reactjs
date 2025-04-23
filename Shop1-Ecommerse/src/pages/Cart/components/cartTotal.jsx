import MyButton from '@components/Button/Button';
import styles from '../styles.module.scss';
import PaymentMethods from '@components/PaymentMethods/PaymentMethods';
import { useContext, useEffect } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingCart from '@pages/Cart/steps/LoadingCart';
import { useNavigate } from 'react-router-dom';

function CartTotal() {
    const {
        containerCartTotal,
        titleTotal,
        subTotal,
        total,
        boxBtn,
        containerSummary
    } = styles;
    const {
        listProductCart,
        isLoading,
        setIsOpen,
        
    } = useContext(SideBarContext);
    const navigate = useNavigate();

    const totalSum = listProductCart.reduce((acc, item) => {
        return acc + item.total;
    }, 0);

    const handleNavigateShop = () => {
        navigate('/shop');
        if (setIsOpen) {
            setIsOpen(false);
        }
    };

    
    return (
        <div className={containerSummary}>
            <div className={containerCartTotal}>
                <div className={titleTotal}>CART TOTALS</div>
                <div className={subTotal}>
                    Subtotal <p>${totalSum.toFixed(2)}</p>
                </div>
                <div className={total}>
                    TOTAL <p>${totalSum.toFixed(2)}</p>
                </div>
                <div className={boxBtn}>
                    <MyButton content='PROCEED TO CHECKOUT' />
                    <MyButton
                        content='CONTINUE SHOPPING'
                        isPrimary={false}
                        onClick={handleNavigateShop}
                    />
                </div>
            </div>

            <PaymentMethods />
        </div>
    );
}

export default CartTotal;
