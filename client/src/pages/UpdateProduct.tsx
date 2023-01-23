import React, { useState, useEffect, useMemo } from "react";
import { Row, Form, Button, Col, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { findById, updateProduct } from "../redux/slices/productSlice";
import { RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBValidation,
} from "mdb-react-ui-kit";
import "./AddProduct.css";

import { StarRatings } from "components/StarRatings";

const UpdateProduct = () => {
  const { id } = useParams<{ id: string }>();
  const { error, item } = useAppSelector((state: RootState) => ({
    ...state.products,
  }));
   const products = useAppSelector(
     (state: RootState) => state.products.products
   );

  // const { title, description, size, price, categories, images } = formValue;
  const dispatch = useAppDispatch();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  useEffect(() => {
    if (!id) return;
    dispatch(findById(id));
  }, [dispatch, id]);


  useEffect(() => {
    (() => {
      if (!item) return;
      setFormValue({
        title: item.title,
        description: item.description,
        size: item.size,
        price: item.price,
        category: item.category,
        images: item.images,
      });
    })();
  }, [item.title, item.description,item.size,item.category,item.images, item.price]);

  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    size: "",
    price: "",
    category: "",
    images: "",
  });
   


  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formdata = {
      title: formValue.title,
      description: formValue.description,
      size: formValue.size,
      price: formValue.price,
      category: formValue.category,
      images: formValue.images,
    };
    let product = {
      _id: id,
      ...formdata
    };
    setFormValue(()=> formdata);
    dispatch(updateProduct({ formValue, _id: product._id, products }));
  };

  return (
    <>
      <div>
        <div
          style={{
            margin: "auto",
            padding: "15px",
            alignContent: "center",
            marginTop: "120px",
          }}
        >
          <MDBCard alignment="center">
            <Row>
              <Col md={6} className="new-product__form--container">
                <h3>Update this product</h3>
                <MDBCardBody>
                  <MDBValidation
                    style={{ width: "100%" }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="row g-3"
                  >
                    <div className="col-md-12">
                      <Form.Label>Product name</Form.Label>
                      <MDBInput
                        // label="title"
                        type="text"
                        placeholder={formValue.title}
                        value={formValue.title ?? ""}
                        name="title"
                        onChange={(e) =>
                          setFormValue({ ...formValue, title: e.target.value })
                        }
                        // required
                        // invalid
                        // validation="Please provide last name"
                      />
                    </div>
                    <div>
                      <Form.Group className="mb-3">
                        <Form.Label>Product description</Form.Label>
                        <MDBInput
                          //   label="Description"
                          type="text"
                          style={{ height: "100px" }}
                          value={formValue.description ?? ""}
                          name="description"
                          onChange={(e) =>
                            setFormValue({
                              ...formValue,
                              description: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-12">
                      <Form.Label>Categories</Form.Label>
                      <MDBInput
                        // label="Categories"
                        type="text"
                        value={formValue.category ?? ""}
                        placeholder="Strings | Pipe | Pacussion"
                        name="category"
                        onChange={(e) =>
                          setFormValue({
                            ...formValue,
                            category: e.target.value,
                          })
                        }

                        // invalid
                        // validation="Please provide email"
                      />
                    </div>
                    <div className="col-md-12">
                      <Form.Label>Size(cm)</Form.Label>
                      <MDBInput
                        // label="Size"
                        type="text"
                        placeholder={formValue.size}
                        value={formValue.size ?? ""}
                        name="size"
                        onChange={(e) =>
                          setFormValue({ ...formValue, size: e.target.value })
                        }
                        // invalid
                        // validation="Please provide password"
                      />
                    </div>
                    <div className="col-md-12">
                      <Form.Label>Price($)</Form.Label>
                      <MDBInput
                        // label="Price"
                        type="text"
                        value={formValue.price ?? ""}
                        placeholder="Price ($)"
                        name="price"
                        onChange={(e) =>
                          setFormValue({ ...formValue, price: e.target.value })
                        }

                        // invalid
                        // validation="Please provide confirm password"
                      />
                    </div>
                    <div className="col-md-12">
                      <Form.Label>Image</Form.Label>
                      <MDBInput
                        // label="Images"
                        type="link"
                        placeholder="paste your image link"
                        value={formValue.images ?? ""}
                        name="images"
                        onChange={(e) =>
                          setFormValue({ ...formValue, images: e.target.value })
                        }
                        // invalid
                        // validation="Please provide confirm password"
                      />
                    </div>
                    <div className="button_submit">
                      <Form.Group>
                        <Button type="submit" style={{ width: "100%" }}>
                          Update Product
                        </Button>
                      </Form.Group>

                      <Form.Group>
                        {/* <Button
                   type="submit"
                   style={{ width: "100%" }}
                   className="mt-2"
                   color="danger"
                //    onClick={handleClear}
                 >
                   Clear
                 </Button> */}
                      </Form.Group>
                    </div>
                  </MDBValidation>
                </MDBCardBody>
              </Col>
              <Col md={6} className="new-product__image--container">
                <Col
                  style={{ flexGrow: "1" }}
                  className="Products-preview"
                  key="index"
                >
                  <Card style={{ width: "25rem" }}>
                    <Card.Img
                      style={{ height: "15rem", objectFit: "contain" }}
                      variant="top"
                      src={item.images}
                      alt={item.title}
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item?.description}</Card.Text>
                      <Card.Text>Category: {item.category}</Card.Text>
                      <Card.Text>Size: {item.size}cm</Card.Text>
                      <Card.Text>{item.price}€</Card.Text>
                      <p>Reviews</p>
                      <div style={{ margin: "15px" }} className="col-md-8">
                        <StarRatings />
                      </div>

                      <br />

                      <Button
                        style={{ margin: "15px" }}
                        className="col-md-8"
                        variant="primary"
                        href={`/dashboard`}
                      >
                        Dashboard
                      </Button>

                      <h6>{item._id}</h6>
                    </Card.Body>
                  </Card>
                </Col>
              </Col>
            </Row>
          </MDBCard>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
