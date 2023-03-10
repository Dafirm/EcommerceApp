import  { useEffect } from "react";
import {  Col, Card } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { StarRatings } from "./StarRatings";

import { RootState } from "redux/store";

import { deleteProduct, } from "redux/slices/productSlice";
import { toast } from "react-toastify";
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { Product } from "types";
import { formatCurrency } from "utils/FormatPrice";
import { addToCart } from "redux/slices/cartSlice";




const AdminCardProduct = ( product: Product) => {
  const products = useAppSelector((state:RootState) => state.products.products);
  const dispatch = useAppDispatch();

  const { images,  title, _id, category, size, price } = product;
  const { error } = useAppSelector((state: RootState) => ({
    ...state.products,
  }));
 useEffect(() => {
   error && toast.error(error);
 }, [error]);


  return (
    <>
      <Col
        style={{ flexGrow: "1" }}
        className="border border-slate-300 rounded-md w-4/12"
      >
        <Card style={{ width: "20rem" }}>
          <Card.Img
            style={{ height: "10rem", objectFit: "contain" }}
            variant="top"
            src={images}
            alt={title}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            {/* <Card.Text>
              {description}
            </Card.Text> */}
            <Card.Text>Category: {category}</Card.Text>
            <Card.Text>Size: {size}cm</Card.Text>
            <Card.Text>{formatCurrency(price)}€</Card.Text>
            <Card.Text>{_id}</Card.Text>

            <p>Reviews</p>

            <br />

            <div style={{ margin: "5px" }}>
              <StarRatings />
            </div>

            <div className="px-10 flex -mx-2 h-10  m-8">
              <button
                onClick={() => {
                  dispatch(addToCart(product));
                }}
                className=" px-20 right-5 top-5 relative rounded px-3 py-2.5 overflow-hidden group bg-blue-600 relative hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-200"
              >
                <span className="absolute right-0 w-6 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-10 group-hover:-translate-x-40 ease"></span>
                <span className="relative">
                  <GiShoppingCart size={20} color="#ffff" />
                </span>
              </button>

              <br />

              <button
                
                onClick={() => {
                  dispatch(deleteProduct({ _id: product._id, products }));
                 
                }}
                className=" px-20 left-5 top-5 relative rounded px-3 py-2.5 overflow-hidden group bg-red-600 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-200"
              >
                <span className="absolute right-0 w-6 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-10 group-hover:-translate-x-40 ease"></span>
                <span className="relative">
                  <MdOutlineDelete size={20} color="#ffff" />
                </span>
              </button>
            </div>

            <div className="px-10 flex -mx-2 h-10  m-8">
              <a
                href={`/editProduct/${_id}`}
                className=" px-20 right-5 top-5 relative rounded px-3 py-2.5 overflow-hidden group bg-blue-600 relative hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-200"
              >
                <span className="absolute right-0 w-6 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-10 group-hover:-translate-x-40 ease"></span>
                <span className="relative">
                  <GrUpdate size={20} color="#ffff" />
                </span>
              </a>

              <br />

              {/* <a
                href="/addProduct"
                className=" px-20 left-5 top-5 relative rounded px-3 py-2.5 overflow-hidden group bg-blue-600 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-200"
              >
                <span className="absolute right-0 w-6 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-10 group-hover:-translate-x-40 ease"></span>
                <span className="relative">
                  <MdAddShoppingCart size={20} color="#ffff" />
                </span>
              </a> */}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default AdminCardProduct;





