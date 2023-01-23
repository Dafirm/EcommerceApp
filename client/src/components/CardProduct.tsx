
import{ Col, Card }from "react-bootstrap";

import { useAppDispatch, useAppSelector} from "../redux/hooks";
import {StarRatings} from './StarRatings';
import { RootState } from "redux/store";
import { formatCurrency } from "utils/FormatPrice";
import { Product } from "types";
import { addToCart } from "redux/slices/cartSlice";





const CardProduct = (product:Product) => {

 const cart = useAppSelector((state:RootState) => state.cart);
    const dispatch = useAppDispatch();
      
      const { images,  title, _id, category, size, price }=product;


  // const addItemToCart = () => {
  //   const cartProduct = {
  //     ...product,
  //   };
  //   dispatch(addToCart(cartProduct._id));
  // };
    // const addtoCartHandler = (id: string) => {
    //   dispatch(addToCart(cart.cartItems));
    // };
      
      
  return (
    <Col style={{ flexGrow: "1" }} className="Products-preview">
      <Card style={{ width: "25rem" }}>
        <Card.Img
          style={{ height: "15rem", objectFit: "contain" }}
          variant="top"
          src={images}
          alt={title}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          {/* <Card.Text>{description}</Card.Text> */}
          <Card.Text>Category: {category}</Card.Text>
          <Card.Text>Size: {size}cm</Card.Text>
          <Card.Text>{formatCurrency(price)}</Card.Text>
          <p>Reviews</p>

          <div style={{ margin: " 5px" }}>
            <StarRatings />
          </div>
          {/* <p>Added to cart {cartQuantity} times</p> */}

          {/* <Button
            style={{ margin: "15px" }}
            className="col-md-6"
            variant="outline-primary"
            onClick={() => {
              dispatch(addToCart(product._id));
            }}

            //dispatch(incrementQuantity(item.productId));
          >
            Add to cart
          </Button> */}

          <div className="px-10 flex -mx-2 h-10  m-8">
            <button
              onClick={() => {
                 dispatch(
                   addToCart(product)
                 );;
              }}
              
              className=" px-20 right-5 top-5 relative rounded px-3 py-2.5 overflow-hidden group bg-blue-600 relative hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-200"
            >
              <span className="absolute right-0 w-6 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-10 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Add to cart</span>
            </button>

            <br />

            <a
              href={`/products/${_id}`}
              className=" left-5 top-5 px-20 relative inline-flex items-center justify-start py-2.5 pl-4 pr-7 overflow-hidden text-indigo-700 transition-all duration-150 ease-in-out rounded hover:pl-7 hover:pr-4 bg-gray-50 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-2 duration-200 ease-out group-hover:translate-x-10">
                <svg
                  className="w-4 h-4 text-blue-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-10 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-4 h-4 text-blue-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                More info
              </span>
            </a>

            {/* <Button
            style={{ margin: "15px" }}
            className="col-md-6"
            variant="primary"
            href={`/products/${_id}`}
          >
            More info
          </Button> */}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProduct




