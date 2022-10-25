

// import React, { useEffect } from "react";

// import { Button, Row, Col, Card } from "react-bootstrap";
// import { useParams } from "react-router-dom";

// import { findById } from "../redux/slices/productSlice";
// import { RootState } from "../redux/store";
// import { useAppDispatch, useAppSelector } from "../redux/hooks";
// import { addToCart } from "../redux/slices/cartSlice";

// const SingleProduct = () => {
//   const dispatch = useAppDispatch();

//    const {
//      product: { items, error },
//      cart,
//    } = useAppSelector((state: RootState) => state);
//    console.log("items:", items);

//      const productItem = items.find((productItem: any) => productItem.title === id);

//   const { id } = useParams<{ id: string }>();
//   console.log("id:", id);

//   useEffect(() => {
//     if (id) {
//       dispatch(findById());
//     }
//   }, [id]);

//     const handleAddToCart = () => {
//       dispatch(addToCart(Carts));
//     };

//     const handleGoBack = () => {
//       // eslint-disable-next-line no-restricted-globals
//       history.back();
//     };

//     const isInCart = cart.some(
//       (newItem: any) => newItem.title === items.title
//     );

//   return (
//     <div className="ProductDetails__container">
//       <h1>{title} </h1>
//       <div className="ProductDetails__Info">
//         <img src={newItem.images} alt="flag" />
//         <div>
//           <h4>{newItem.description}</h4>
//           <h4>This instrument belongs to the family of {newItem.categories}</h4>

//           <h4>Size:{newItem.size}cm Weight : 5g</h4>
//           <h4>{newItem.price}€</h4>

//           <Card.Body>
//             onClick={handleAddToCart} disabled={isInCart}
//             <Button>ADD TO CART</Button>
//             onClick={handleGoBack}
//             <Button onClick={handleGoBack}>Home</Button>
//           </Card.Body>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;

import React from 'react'

const SingleProduct = () => {
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct
