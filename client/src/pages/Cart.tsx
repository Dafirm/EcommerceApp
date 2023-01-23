// import { useAppSelector } from "redux/hooks";
// import { RootState } from "redux/store";

// import EmptyCart from "components/EmptyCart";
// import CartList from "components/CartList";
// import { Button } from "react-bootstrap";


// const Cart = () => {
//   const carts = useAppSelector((state: RootState) => state.cart.cartItems);


//   const checkEmptyCart = () => {
//     // return items.quantity === 0;
//     return carts.cartItems === 0;
//   };
  
//   // const handleClearCart = () => {
//   //   dispatch(emptyCart(product));
//   // };

//   return (
//     <section style={{ marginTop: "100px" }}>
//       <h4 style={{ marginTop: "180px", marginLeft: "40%" }}>
//         View your added items
//       </h4>
//       {checkEmptyCart() ? (
//         <EmptyCart />
//       ) : (
//         <div
//           className=" align-item-center flex-row"
//           style={{ gap: ".2rem", marginLeft: "40%" }}
//         >
//           <Button
//             className="fs-4"
//             variant="primary"
//             color="red"
//             onClick={() => {
//               // dispatch(emptyCart(product));
//             }}
//             //onClick={() => handleClearCart()}
//           >
//             <span style={{ fontSize: "18px" }}>Empty cart</span>
//           </Button>
//             <CartList/>
//         </div>
//       )}
//     </section>
//   );
// };
// export default Cart;




// import { useAppDispatch, useAppSelector } from "redux/hooks";
// import { RootState } from "redux/store";

// import EmptyCart from "components/EmptyCart";
// import CartList from "components/CartList";
// import { Button } from "react-bootstrap";
// import { Product } from "types";


// const Cart = () => {
//   const items = useAppSelector((state: RootState) => state.cart.cartItems);
//   const dispatch = useAppDispatch();

//   const checkEmptyCart = () => {
//     return items.length === 0;
//   };
//   // const handleClearCart = () => {
//   //   dispatch(emptyCart(product));
//   // };

//   return (
//     <section style={{ marginTop: "100px" }}>
//       <h4 style={{ marginTop: "180px", marginLeft: "40%" }}>
//         View your added items
//       </h4>
//       {checkEmptyCart() ? (
//         <EmptyCart />
//       ) : (
//         <div
//           className=" align-item-center flex-row"
//           style={{ gap: ".2rem", marginLeft: "40%" }}
//         >
//           <Button
//             className="fs-4"
//             variant="primary"
//             color="red"
//             onClick={() => {
//               dispatch(EmptyCart());
//             }}
//             //onClick={() => handleClearCart()}
//           >
//             <span style={{ fontSize: "18px" }}>Empty cart</span>
//           </Button>
//           <CartList _id={""} title={""} images={""} description={""} category={""} size={0} price={0} cartQuantity={0}          />
//         </div>
//       )}
//       ¨
//     </section>
//   );
// };
// export default Cart;









// import React from "react";
// import { Button } from "react-bootstrap";
// import { useAppDispatch, useAppSelector } from "redux/hooks";
// import {
//   getcartProducts,
//   getcartTotalPrice,
//   removeFromCart,
// } from "redux/slices/cartSlice";
// import { Product } from "types";

// const Cart: React.FC = () => {
//   const cartProducts = useAppSelector(getcartProducts);
//   const totalPrice = getTotals

//   const dispatch = useAppDispatch();

//   const handleRemoveFromCart = (productId: string) => dispatch(removeFromCart);

//   return (
//     <>
//       <h2>Cart List items</h2>
//       <h5>{totalPrice}</h5>
//       {cartProducts.items.map((product: Product) => (
//         <div key={Number(Math.random()).toString()}>
//           <span>{product.title}</span>
//           <span>{product.price}</span>
//           <span>{product.description} </span>
//           <span>Size: {product.sizes}cm </span>
//           <span>Category: {product.categories}</span>
//           <Button onClick={() => handleRemoveFromCart(product._id)}>
//             Remove from cart
//           </Button>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Cart







// import CartList from 'components/CartList'


// import "./Cart.css";
// const Cart = () => {
  
//   return (
//     <>
//       <div className="cartScreen">
//         <h2>Shopping Cart</h2>
//         <CartList />
        
//       </div>
//       <div className="cartScreen__right">
//         <div className="cartScreen__info">
//           <p>Subtotal (0) item</p>
//           <p>€499.99</p>
//         </div>
//         <div className="bg-gray-50 inline-flex border border-gray-200 rounded-lg text-gray-900 select-none divide-x">
//           {" "}
//           <button >
//             Proceed to checkout
//           </button>{" "}
       
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cart



// import CartList from 'components/CartList';
// import React from 'react'
// import { useAppDispatch, useAppSelector } from "redux/hooks";
// import { RootState } from 'redux/store'


// const Cart = () => {
//   const carts = useAppSelector((state: RootState) => state.cart.cartItems);
//   return (
//     <div>
//       {carts.map((item: any) => {
//         return <CartList _id={''} title={item.title} images={''} description={''} category={item.category} size={0} price={0} cartQuantity={0}/>
//       })}
//     </div>
//   )
// }

// export default Cart


import React, { useEffect } from "react";
import "./Cart.css";
import {

  selectCartItems,
  selectGetTotalPrice,
  selectGetTotalQuantity,
  setClearCartItems,
  setGetTotals,
} from "../redux/slices/cartSlice";

import CartList from "../components/CartList";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { formatCurrency } from "utils/FormatPrice";
import EmptyCart from "../components/EmptyCart";
import CartCount from "components/CartCount";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectGetTotalPrice);
  const quantityItems = useAppSelector(selectGetTotalQuantity);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

    const checkEmptyCart = () => {
      return quantityItems === 0;
    };


    
  return (
    <>
      <div className="cartScreen">
        <div className="cartScreen__right">
          <div className="cartScreen__info">
            <p> You have {quantityItems} Product type in your cart</p>
            <p>Subtotal for all products{formatCurrency(totalPrice)} </p>
          </div>
          <div className="bg-gray-50 inline-flex border border-gray-200 rounded-lg text-gray-900 select-none divide-x">
            {" "}
            <button>Proceed to checkout</button>
          </div>
          <div className="bg-gray-50 inline-flex border border-gray-200 rounded-lg text-gray-900 select-none divide-x">
            {" "}
            <button onClick={() => dispatch(setClearCartItems())}>
              Clear Cart
            </button>
          </div>
        </div>
   
      </div>
      <div>
        {checkEmptyCart() ? (
          <EmptyCart />
        ) : (
          <div>
            <div>
              <CartList />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;

/* 

 ${ifCartState ? 
        'opacity-100 visible translate-x-0':'blur-effect-theme h-screen max-w-xl w-full absolute'}
*/
