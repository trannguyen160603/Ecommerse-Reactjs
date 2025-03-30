import MyButton from "@components/Button/Button";
import styles from "../styles.module.scss";
import PaymentMethods from "@components/PaymentMethods/PaymentMethods";
import { useContext } from "react";
import { SideBarContext } from "@/contexts/SideBarProvider";
import LoadingCart from "@pages/Cart/steps/LoadingCart";

function CartTotal() {
  const {
    containerCartTotal,
    titleTotal,
    subTotal,
    total,
    boxBtn,
    containerSummary,
  } = styles;
  const { listProductCart, isLoading } = useContext(SideBarContext);

  const totalSum = listProductCart.reduce((acc, item) => {
    return acc + item.total;
  }, 0);

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
          <MyButton content="PROCEED TO CHECKOUT" />
          <MyButton content="CONTINUE SHOPPING" isPrimary={false} />
        </div>
      {isLoading && <LoadingCart/> }
      </div>

      <PaymentMethods />
    </div>
  );
}

export default CartTotal;
