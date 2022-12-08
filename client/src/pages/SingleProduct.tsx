
import CardProduct from 'components/CardProduct';
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { RootState } from 'redux/store';
import { useParams, useNavigate } from "react-router-dom";
import { findById } from 'redux/slices/productSlice';
import { CardActions } from '@mui/material';
import { Button, Card, Col } from 'react-bootstrap';
import { addToCart, CartProduct } from 'redux/slices/cartSlice';
import { title } from 'process';
import { StarRatings } from 'components/StarRatings';


// type CardProps = {
//   images: string;
//   description: string;
//   title: string;
//   _id: string;
//   categories: string;
//   sizes: string;
//   price: string;
// };

const SingleProduct = (product: CartProduct) => {
  const { item } = useAppSelector((state: RootState) => ({
    ...state.products,
  }));
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //  console.log(item);
  // }, [item])

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // const product: any = items.find(
  //   (queryProduct: any) => queryProduct._id === _id
  // );

  useEffect(() => {
    id && dispatch(findById(id));
  }, [dispatch, id]);

  // const handleAddToCart = () => {
  //   dispatch(addToCart(product));
  // };

  // const handleGoBack = () => {
  //   navigate("/");
  // };

  return (
    <>
      <Col style={{ flexGrow: "1" }} className="Products-preview" key="index">
        <Card style={{ width: "25rem" }}>
          <Card.Img
            style={{ height: "15rem", objectFit: "contain" }}
            variant="top"
            src={item.images}
            alt={item.title}
          />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            {/* <Card.Text>{item?.description}</Card.Text> */}
            <Card.Text>Categories: {item.categories}</Card.Text>
            <Card.Text>Size: {item.sizes}cm</Card.Text>
            <Card.Text>{item.price}€</Card.Text>
            <p>Reviews</p>

            <Button
              style={{ margin: "15px" }}
              className="col-md-8"
              variant="primary"
              onClick={() => {
                dispatch(addToCart(product));
              }}
            >
              Add to cart
            </Button>

            <br />

            <Button
              style={{ margin: "15px" }}
              className="col-md-8"
              variant="primary"
              href={`/`}
            >
              Home
            </Button>
            <div style={{ margin: "15px" }} className="col-md-8">
              <StarRatings />
            </div>
            <h6>would you like to buy this product?</h6>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleProduct
