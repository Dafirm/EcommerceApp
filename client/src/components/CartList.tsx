import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
// import { CartProduct, decreaseQuantity, incrementQuantity } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import "./CartList.css";
import { Button, Card, Col } from "react-bootstrap";
import { formatCurrency } from "utils/FormatPrice";
import { Product } from "types";
// import { removeFromCart } from "redux/slices/cartSlice";



const CartList = () => {
  const items = useAppSelector((state: RootState) => state.cart);
  const cart = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  const products = useAppSelector(
    (state: RootState) => state.products.products
  );
  // const items = useAppSelector((state: RootState) => state.cart.items);

  // const handleDecreaseCart = (product: {
  //   items: any;
  //   _id: string;
  //   title: string;
  //   images: string;
  //   description: string;
  //   categories: string;
  //   sizes: string;
  //   price: string;
  //   cartQuantity: number;
  //   cartPrice: number;
  // }) => {
  //   dispatch(decreaseQuantity(product));
  //   //navigate("/cart");
  // };

  // useEffect(() => {
  //   dispatch(getTotals());
  // }, [cart, dispatch]);

  // const handleAddToCart = (product: {
  //   items: any;
  //   _id: string;
  //   title: string;
  //   images: string;
  //   description: string;
  //   categories: string;
  //   sizes: string;
  //   price: string;
  //   cartQuantity: number;
  //   cartPrice: number;
  // }) => {
  //   dispatch(addToCart(product));
  //   //navigate("/cart");
  // };

  //  const handleRemoveFromCart = (product: {
  //    items: any;
  //    _id: string;
  //    title: string;
  //    images: string;
  //    description: string;
  //    categories: string;
  //    sizes: string;
  //    price: string;
  //    cartQuantity: number;
  //    cartPrice: number;
  //  }) => {
  //    dispatch(removeFromCart(product));
  //    //navigate("/cart");
  //  };

  const renderRows = (items: Product[]) => {
    return items?.map((item) => (
      <Col key={Number(Math.random()).toString()}>
        <Card style={{ width: "30rem" }} className="h-100">
          <Card.Img
            style={{ height: "15rem", objectFit: "contain" }}
            variant="top"
            src={item.images}
            alt={item.title}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
              <span className="fs-2"> {item.title}</span>
              <span className="ms-2 text-muted">
                {/* Price: ${formatCurrency(item?.price * cart.cartQuantity)} */}
                Price: ${(item?.price)}
              </span>
            </Card.Title>
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
              <span>Size: {item.size}cm </span>
              <span>Category: {item.category}</span>
            </Card.Title>
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
              <span>{item.description} </span>
            </Card.Title>

            <div
              className="d-flex align-item-center flex-column"
              style={{ gap: ".7rem" }}
            >
              <div
                className="d-flex align-item-center flex-row"
                style={{ gap: ".6rem" }}
              >
                <Button
                  className="w-100"
                  variant="primary"
                  color="red"
                  // onClick={() => dispatch(decreaseQuantity(product))}
                >
                  <div
                    className="fs-3 d-flex align-item-center justify-content-center"
                    style={{ gap: ".5rem" }}
                  >
                    <span style={{ fontSize: "12px" }}> cart </span>
                    <span style={{ fontSize: "16px" }}> - </span>
                  </div>
                </Button>

                <Button
                  className="w-100"
                  variant="primary"
                  color="red"
                  onClick={() => {
                    // dispatch(incrementQuantity(product));
                  }}
                >
                  <div
                    className="d-flex align-item-center flex-column"
                    style={{ gap: ".5rem" }}
                  >
                    <div
                      className="d-flex align-item-center justify-content-center"
                      style={{ gap: ".5rem" }}
                    >
                      <span style={{ fontSize: "12px" }}> cart </span>
                      <span style={{ fontSize: "16px" }}> + </span>
                    </div>
                  </div>
                </Button>
              </div>
              {/* <p className="count_cart">{cartQuantity}</p> */}
              <Button
                className="w-100"
                variant="primary"
                color="red"
                // onClick={() => {
                //   dispatch(removeFromCart(item._id));
                // }}
              >
                Remove item
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return <Col className="Cart">{renderRows(products)}</Col>;
};
export default CartList;



// import { useAppDispatch, useAppSelector } from "../redux/hooks";
// import { RootState } from "../redux/store";
// // import { CartProduct, decreaseQuantity, incrementQuantity } from "../redux/slices/cartSlice";
// import { toast } from "react-toastify";
// import "./CartList.css";
// import { Button, Card, Col } from "react-bootstrap";
// import { formatCurrency } from "utils/FormatPrice";
// import { Product } from "types";



// const CartList = () => {
//   const products = useAppSelector(
//     (state) => state.products.products
//   );
//   const items = useAppSelector((state) => state.cart);
  
//  console.log("check:", items);

//     return (
//       <main>
//         <h1>Shopping Cart</h1>
//         <table>
//           <thead>
//             <tr>
//               <th>Product</th>
//               <th>Quantity</th>
//               <th>Total</th>
//               <th>Remove</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map(([_id, quantity]) => (
//               <tr key={Number(Math.random()).toString()}>
//                 console.log('check:', products[_id])
//                 <td>
//                   <span className="fs-2"> {products[_id]}</span>
//                 </td>
//                 <td>
//                   <span className="fs-2"> {products[_id]}</span>
//                 </td>
              
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </main>
//     );
// }


// export default CartList;




