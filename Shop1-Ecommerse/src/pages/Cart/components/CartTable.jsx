import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import styles from '../styles.module.scss';
import MyButton from "@components/Button/Button";
import SelectBox from "@pages/OurShop/components/SelectBox";
import LoadingCart from "@pages/Cart/steps/LoadingCart";
import { SideBarContext } from "@/contexts/SideBarProvider";
import { deleteAllItem } from "@/apis/CartService";

const CartTable = ({listProductCart, getData, isLoading, getDataDelete}) => {
    const {cartContainer, cartTable, deleteIcon, productInfo,cartFooter, boxCoupon} = styles;
       const { handleGetListProductCart, setIsLoading, userId } =
            useContext(SideBarContext);
    const showOptions =[
        {label: '1', value: '1'},
        {label: '2', value: '2'},
        {label: '3', value: '3'},
        {label: '4', value: '4'},
        {label: '5', value: '5'},
        {label: '6', value: '6'},
        {label: '7', value: '7'}
    ];

    const getValueSelect = (userId, productId, quantity, size) =>{
        const data = {
          userId,
          productId,
          quantity,
          size,
          isMultiple: true
        };
        getData(data);
    };
    const handleDeleteAllItem = () =>{
          setIsLoading(true)
          deleteAllItem({userId}).then((res) =>{
            handleGetListProductCart(userId, 'cart')
          }).catch((err) =>{
            console.log(err);
            
          })       
    }
   
    

//   const handleQuantityChange = (id, newQuantity) => {
//     setCartItems(cartItems.map(item => 
//       item.id === id ? { ...item, quantity: newQuantity } : item
//     ));
//   };

//   const handleRemoveItem = (id) => {
//     setCartItems(cartItems.filter(item => item.id !== id));
//   };

//   const handleClearCart = () => {
//     setCartItems([]);
//   };

//   const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={cartContainer}>
      
          <table className={cartTable}>
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th></th>
              <th>PRICE</th>
              <th>SKU</th>
              <th>QUANTITY</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            {listProductCart.map((item) => (
              <tr key={item.id}>
                <td className={productInfo}>
                  <img src={item.images[0]} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                    <p>Size: {item.size}</p>
                  </div>
                </td>
                  <td><FaTrash className={deleteIcon} onClick={() => getDataDelete({userId: item.userId, productId: item.productId})} /></td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.sku}</td>
                <td>
                  <SelectBox
                  options={showOptions}
                  getValue={(e) => getValueSelect(item.userId, item.productId, e, item.size)}
                  type='show'
                  defaultValue={item.quantity}
                  />
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
            {isLoading && <LoadingCart/>}
        </table>

      <div className={cartFooter}>
        <div className={boxCoupon}>
        <input type="text" placeholder="Coupon code" />
          <div><MyButton isPrimary={false} content='OK'/> </div>
        </div>
        <div><MyButton isPrimary={false} content={
            <div onClick={handleDeleteAllItem} ><FaTrash style={{color:'#888'}}/> CLEAR SHOPPING CART</div> 
        } /> </div>
      </div>
    </div>
  );
};

export default  CartTable;
