
import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../redux/slices/authSlice";
import { RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import DropDownInterest from "components/DropDownInterest";


const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  country: "",
  city: "",
  
  confirmPassword: "",
};

const Signup = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useAppSelector((state:RootState) => ({ ...state.auth }));
  const { email, password, confirmPassword, lastName, firstName, country, city} = formValue;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Password should match");
    }
    if (email && password && confirmPassword  && lastName && firstName && country && city ) {
      dispatch(register({
        formValue, navigate, toast,
        result: undefined
      }));
    }
  };

   
  const onInputChange = (e:any) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div
      style={{
        backgroundImage: "url(https://www.musicinstruments.in/banner2.jpg)",
      }}
    >
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "450px",
          alignContent: "center",
          marginTop: "120px",
        }}
      >
        <MDBCard alignment="center">
          <MDBIcon fas icon="user-circle" className="fa-2x" />
          <h5>Sign Up</h5>
          <MDBCardBody>
            <MDBValidation
              onSubmit={handleSubmit}
             
              noValidate
              className="row g-3"
            >
              <div className="col-md-6">
                <MDBInput
                  label="FirstName"
                  type="text"
                  value={firstName}
                  name="firstName"
                  onChange={onInputChange}
                  required
                  // invalid
                  // validation="Please provide last name"
                />
              </div>
              <div className="col-md-6">
                <MDBInput
                  label="lastName"
                  type="text"
                  value={lastName}
                  name="lastName"
                  onChange={onInputChange}
                  required
                  // invalid
                  // validation="Please provide last name"
                />
              </div>
              <div className="col-md-12">
                <MDBInput
                  label="Email"
                  type="email"
                  value={email}
                  name="email"
                  onChange={onInputChange}
                  required
                  // invalid
                  // validation="Please provide email"
                />
              </div>
              <div className="col-md-12">
                <MDBInput
                  label="Password"
                  type="password"
                  value={password}
                  name="password"
                  onChange={onInputChange}
                  required
                  // invalid
                  // validation="Please provide password"
                />
              </div>
              <div className="col-md-12">
                <MDBInput
                  label="Confirm Password "
                  type="password"
                  value={confirmPassword}
                  name="confirmPassword"
                  onChange={onInputChange}
                  required
                  // invalid
                  // validation="Please provide confirm password"
                />
              </div>
              <div className="col-md-6">
                <MDBInput
                  label="Country"
                  type="text"
                  value={country}
                  name="country"
                  onChange={onInputChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <MDBInput
                  label="City"
                  type="text"
                  value={city}
                  name="city"
                  onChange={onInputChange}
                  required
                />
              </div>
              <div className="col-md-12">
                {/* <MDBInput
                  label="Input your music interest"
                  type="text"
                  value={interest}
                  name="city"
                  onChange={onInputChange}
                  required
                /> */}
                {/* <DropDownInterest /> */}
              </div>
              <div className="col-12">
                <MDBBtn style={{ width: "100%" }} className="mt-2">
                  {loading && (
                    <MDBSpinner
                      size="sm"
                      role="status"
                      tag="span"
                      className="me-2"
                    />
                  )}
                  Register
                </MDBBtn>
              </div>
            </MDBValidation>
          </MDBCardBody>
          <MDBCardFooter>
            <Link to="/login">
              <p>Already have an account ? Sign In</p>
            </Link>
          </MDBCardFooter>
        </MDBCard>
      </div>
    </div>
  );
};

export default Signup;

