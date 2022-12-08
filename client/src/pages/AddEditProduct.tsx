import React, { useState, useEffect } from "react";
import {  Row, Form, Button, Col, Alert } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../redux/slices/productSlice";
import { RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBValidation,
} from "mdb-react-ui-kit";
import './AddEditProduct.css'


const initialState = {
  title: "",
  description: "",
  categories: "",
  size: "",
  price: "",
  images: "",
};


const AddEditTour = () => {

    const [formValue, setFormValue] = useState(initialState);

  const { error } = useAppSelector((state: RootState) => ({
    ...state.products,
  }));
  const { title, description, size, price, categories, images } = formValue;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


 useEffect(() => {
   error && toast.error(error);
 }, [error]);

 const handleSubmit = (e: any) => {
   e.preventDefault();
   if (!title || !description || !size || !price || !categories || !images ){
     return toast.error("Please fill out all the fields");
   }
   if (title && description && size && price && categories && images) {
     dispatch(
       createProduct({
           formValue,
           navigate,
           toast,
           result: undefined,
           updatedProductData: undefined,
           id:''
       })
     );
   }
 };

  const onInputChange = (e: any) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
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
            <h3>Create a product</h3>
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
                    placeholder="Enter product name"
                    value={title}
                    name="title"
                    onChange={onInputChange}
                    required
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
                      value={description}
                      name="description"
                      onChange={onInputChange}
                      required
                    />
                  </Form.Group>
                </div>
                <div className="col-md-12">
                  <Form.Label>Categories</Form.Label>
                  <MDBInput
                    // label="Categories"
                    type="text"
                    value={categories}
                    placeholder="Strings | Pipe | Pacussion"
                    name="categories"
                    onChange={onInputChange}
                    required
                    // invalid
                    // validation="Please provide email"
                  />
                </div>
                <div className="col-md-12">
                  <Form.Label>Size(cm)</Form.Label>
                  <MDBInput
                    // label="Size"
                    type="text"
                    placeholder="Size (cm)"
                    value={size}
                    name="size"
                    onChange={onInputChange}
                    required
                    // invalid
                    // validation="Please provide password"
                  />
                </div>
                <div className="col-md-12">
                  <Form.Label>Price($)</Form.Label>
                  <MDBInput
                    // label="Price"
                    type="text"
                    value={price}
                    placeholder="Price ($)"
                    name="price"
                    onChange={onInputChange}
                    required
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
                    value={images}
                    name="images"
                    onChange={onInputChange}
                    required
                    // invalid
                    // validation="Please provide confirm password"
                  />
                </div>
                <div className="button_submit">
                  <Form.Group>
                    <Button type="submit" style={{ width: "100%" }}>
                      Create Product
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
          <Col md={6} className="new-product__image--container"></Col>
        </Row>
      </MDBCard>
    </div>
  ); 
};

export default AddEditTour;

