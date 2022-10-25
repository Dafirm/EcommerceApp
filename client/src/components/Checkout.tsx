import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { findById, removeFromCart } from "../redux/slices/cartSlice";
import { RootState } from "../redux/store";
import { Button, Row, Col, Card } from "react-bootstrap";
import { StarRatings } from "./StarRatings";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const { items} = useAppSelector((state: RootState) => state.cart);
  const handleOpen = () => setOpen(true);
    const { id } = useParams();

  const isEmpty = items.length === 0;



    useEffect(() => {
      if (id) {
        dispatch(findById());
      }
    }, [id]);

  return (
    <Col
      style={{ flexGrow: "1", margin: "auto" }}
      className="Products-preview"
      key="index"
    >
      <div style={{ marginTop: "8rem", textAlign: "center" }}>
        <h4>Checkout Your Products</h4>
      </div>
      <Card style={{ width: "25rem" }}>
        <div>
          <div style={{textAlign: "center" }}>
            {isEmpty && <h5> Your cart is empty!</h5>}
          </div>

          <div>
            {items.map((newItem) => {
              return (
                <div className="cart__Button">
                  {/* <div className="country_added">
                     <img src={newItem.images} alt="flag" />
                     {newItem.title}
                   </div> */}
                  <Card.Img
                    style={{ height: "22rem", objectFit: "contain" }}
                    variant="top"
                    src={newItem.images}
                    alt={newItem.title}
                  />
                  <Card.Body>
                    <Card.Title>{newItem.title}</Card.Title>
                    <Card.Text>{newItem.description}</Card.Text>
                    <Card.Text>Categories: {newItem.categories}</Card.Text>
                    <Card.Text>Size: {newItem.size}cm</Card.Text>
                    <Card.Text>{newItem.price}€</Card.Text>
                    <p>Reviews</p>

                    <br />
                    <div style={{ margin: "15px" }} className="col-md-8">
                      <StarRatings />
                    </div>
                  </Card.Body>

                  <Button
                    onClick={() =>
                      dispatch(removeFromCart({ title: newItem.title }))
                    }
                  >
                    <DeleteForeverIcon />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default Checkout;





