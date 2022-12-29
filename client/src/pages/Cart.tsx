import { useAppDispatch, useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";

import EmptyCart from "components/EmptyCart";
import CartList from "components/CartList";
import { Button } from "react-bootstrap";
// import { CartProduct, emptyCart } from "redux/slices/cartSlice";

const Cart = () => {
  const items = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  const checkEmptyCart = () => {
    return items.quantity === 0;
  };
  
  // const handleClearCart = () => {
  //   dispatch(emptyCart(product));
  // };

  return (
    <section style={{ marginTop: "100px" }}>
      <h4 style={{ marginTop: "180px", marginLeft: "40%" }}>
        View your added items
      </h4>
      {checkEmptyCart() ? (
        <EmptyCart />
      ) : (
        <div
          className=" align-item-center flex-row"
          style={{ gap: ".2rem", marginLeft: "40%" }}
        >
          <Button
            className="fs-4"
            variant="primary"
            color="red"
            onClick={() => {
              // dispatch(emptyCart(product));
            }}
            //onClick={() => handleClearCart()}
          >
            <span style={{ fontSize: "18px" }}>Empty cart</span>
          </Button>
          <CartList />
        </div>
      )}
    </section>
  );
};
export default Cart;




// import { useAppDispatch, useAppSelector } from "redux/hooks";
// import { RootState } from "redux/store";

// import EmptyCart from "components/EmptyCart";
// import CartList from "components/CartList";
// import { Button } from "react-bootstrap";
// import { CartProduct, emptyCart } from "redux/slices/cartSlice";

// const Cart = (product: CartProduct) => {
//   const items = useAppSelector((state: RootState) => state.cart.items);
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
//               dispatch(emptyCart(product));
//             }}
//             //onClick={() => handleClearCart()}
//           >
//             <span style={{ fontSize: "18px" }}>Empty cart</span>
//           </Button>
//           <CartList
//             items={undefined}
//             _id={""}
//             title={""}
//             images={""}
//             description={""}
//             categories={""}
//             sizes={""}
//             price={""}
//             cartQuantity={0}
//             quantity={0}
//             cartPrice={0}
//           />
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





/* eslint-disable no-underscore-dangle */
// import { StarIcon } from '@heroicons/react/24/solid';
// import Image from 'next/image';
// import { addToCart, removeFromCart } from "redux/slices/cartSlice";
// import { useDispatch } from 'react-redux';
// import { Card } from "react-bootstrap";



// type ProductProps = {
//   product: {
//     _id: string;
//     title: string;
//     images: string;
//     description: string;
//     categories: string;
//     sizes: string;
//     price: string;
//     cartQuantity: number;
//   };
// };

// function CheckoutProduct({ product }: ProductProps) {
//   const dispatch = useDispatch();

//   const addItemToCart = () => {
//     const cartProduct = {
//       ...product,
      
//     };
//     dispatch(addToCart(cartProduct));
//   };

//   const removeItemFromCart = () => {
//     dispatch(removeFromCart({ _id: product._id }));
//   };
//   return (
//     <div className="grid grid-cols-5 shadow-md">
//       <Card.Img
//         style={{ height: "15rem", objectFit: "contain" }}
//         variant="top"
//         src={product.images}
//         alt={product.title}
//       />

//       {/* Middle */}
//       <div className="col-span-3 mx-5">
//         <p>{product.title}</p>

//         <p className="text-xs my-2 line-clamp-3">{product.description}</p>
//         <p>{product.price}</p>
//       </div>
//       <div className="flex flex-col space-y-2 my-auto justify-self-end">
//         <button type="button" onClick={addItemToCart} className="button">
//           Add to Cart
//         </button>
//         <button type="button" onClick={removeItemFromCart} className="button">
//           Remove from Cart
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CheckoutProduct;



