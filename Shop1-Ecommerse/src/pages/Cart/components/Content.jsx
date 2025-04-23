import styles from '../styles.module.scss';
import CartTable from '@pages/Cart/components/CartTable';
import CartTotal from '@pages/Cart/components/cartTotal';
import { useContext, useEffect } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { addProductToCart, deleteItem } from '@/apis/CartService';
import { PiShoppingCartLight } from "react-icons/pi";
import MyButton from '@components/Button/Button';
import {  useNavigate } from 'react-router-dom';
import { getCart } from '@/apis/CartService';

function Content() {
    const { containerContent, boxEmptyCart, titleEmptyCart, btnEmptyCart } = styles;
    const { listProductCart, handleGetListProductCart, setIsLoading, isLoading, setIsOpen, setListProductCart, userId } =
        useContext(SideBarContext);
    const navigate = useNavigate();

    const handleReplaceQuantity = data => {
        setIsLoading(true)
        addProductToCart(data)
            .then(res => {
                handleGetListProductCart(data.userId, 'cart');
            })
            .catch(err => {
                setIsLoading(false)
                console.log(err);
            });
    };
    const handleDeleteItemCart = (data) =>{
        setIsLoading(true)
        deleteItem(data)
        .then((res) =>{
            handleGetListProductCart(data.userId, 'cart');
        })
        .catch((err) =>{
            console.log(err);
        })
    };
    const handleNavigateShop =() =>{
        navigate('/shop')
        if(setIsOpen){
            setIsOpen(false);
        }       
    };

    useEffect(() => {
       if(userId){
        getCart(userId)
        .then(res => {
            setListProductCart(res.data.data || []);
            setIsLoading(false);
        })
        .catch(err => {
            setListProductCart([]);
            setIsLoading(false);
        });
       }
    }, []);
    
    

    return (
        <>
        {listProductCart.length > 0 ? (
             <div className={containerContent}>
             <CartTable
                 listProductCart={listProductCart}
                 getData={handleReplaceQuantity}
                 isLoading = {isLoading}
                 getDataDelete={handleDeleteItemCart}
             />
             <CartTotal />

         </div>
        ) : (
            <div className={boxEmptyCart}>
                <PiShoppingCartLight style={{fontSize:'40px'}}/>
                <div className={titleEmptyCart}>
                    <h2>YOUR SHOPPING CART IS EMPTY</h2>
                    <p>We invite you to get acquainted with an assortment of our shop. Surely you can find something for yourself!</p>
                </div>
                <div className={btnEmptyCart} onClick={handleNavigateShop}>
                    <MyButton content={'RETURN TO SHOP'} />
                </div>

            </div>
        )}
           
        </>
    );
}

export default Content;
