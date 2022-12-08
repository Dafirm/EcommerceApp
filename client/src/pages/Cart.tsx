import { useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";

import EmptyCart from "components/EmptyCart";
import CartList from "components/CartList";

const Cart = () => {
  const items = useAppSelector((state: RootState) => state.cart.items);

  const checkEmptyCart = () => {
    return items.length === 0;
  };

  return (
    <section style={{ marginTop: "100px" }}>
      <h4 style={{ marginTop: "180px", marginLeft: "40%" }}>
        View your added items
      </h4>
      {checkEmptyCart() ? (
        <EmptyCart />
      ) : (
        <div style={{ flexGrow: "1" }} className="Cart_List">
          <CartList _id={""} title={""} images={""} description={""} categories={""} sizes={""} price={""} cartQuantity={0} />
        </div>
      )}
    </section>
  );
};
export default Cart;
