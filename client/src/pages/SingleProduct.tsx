
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { RootState } from 'redux/store';
import { useParams } from "react-router-dom";
import { findById } from 'redux/slices/productSlice';
import { addToCart } from 'redux/slices/cartSlice';
import { StarRatings } from 'components/StarRatings';
import { Product } from 'types';
import { useEffect } from 'react';




const SingleProduct = (product: Product) => {
  const { item } = useAppSelector((state: RootState) => ({
    ...state.products,
  }));


  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    id && dispatch(findById(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="p-16">
        <div className="p-8 bg-white shadow mt-24">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {" "}
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              {" "}
              <div>
                {" "}
                <p className="font-bold text-gray-700 text-xl">22</p>{" "}
                <p className="text-gray-400">Buyers</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="font-bold text-gray-700 text-xl">Quantity</p>{" "}
                <select className="text-gray-400">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="font-bold text-gray-700 text-xl">89</p>{" "}
                <p className="text-gray-400">Comments</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="relative">
              {" "}
              <div className="w-100 h-80 mx-auto   absolute inset-x-0 top-20 -mt-14 flex items-center justify-center text-indigo-500">
                <img src={item.images} alt={item.title} />
              </div>{" "}
            </div>{" "}
            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              {" "}
              <button
                className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                onClick={() => {
                  dispatch(addToCart(product));
                }}
              >
                {" "}
                Add to cart
              </button>{" "}
              <a
                href="/"
                className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                {" "}
                Home
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div className="mt-20 text-center border-b pb-12">
            {" "}
            <h1 className="text-4xl font-medium text-gray-700">
              {item.title}
            </h1>{" "}
            <p className="font-light text-gray-600 mt-3">
              Category:{item.category}
            </p>{" "}
            <StarRatings />
            <p className="mt-8 text-gray-500"></p>{" "}
            <p className="mt-2 text-gray-500">Size:{item.size}cm</p>{" "}
            <p className="mt-2 text-gray-500">Price:{item.price}€</p>{" "}
          </div>{" "}
          <div className="mt-12 flex flex-col justify-center">
            {" "}
            <p className="text-gray-600 text-center font-light lg:px-16">
              {item.description}
            </p>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct









