

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
// }
import CardHeader from '../components/CardHeader'
import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";

import { findAll } from "../redux/slices/productSlice";
import CardProduct from "../components/CardProduct";
import Spinner from "../components/Spinner";
import { RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Card } from "react-bootstrap";

const Home = () => {
  const { items, loading } = useAppSelector((state:RootState) => ({ ...state.product}));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(findAll());
    console.log('items:', items)
  }, [dispatch]);

  if (loading) {
    return <Spinner  />;
  }


  return (
    <div className="Home__CardHeader">
      <CardHeader />
      <div>
        <MDBCard>
          <MDBCardBody>
            {items.length === 0 && (
              <MDBCardTitle>No Product Found!!!</MDBCardTitle>
            )}
            <MDBCardText>You can continue shopping</MDBCardText>
            <MDBBtn href="/">Homepage</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>

      <div>
        {items &&
          items.map((item:any, index) => <CardProduct key={item.id} {...item}/>)}
           
      </div>
    </div>
  );
}

export default Home

