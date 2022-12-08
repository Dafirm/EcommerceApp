
// import { GoogleLogin } from "@react-oauth/google";
import { useState, useEffect } from "react";
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
import { googleSignIn, login } from "../redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { GoogleLogin } from "react-google-login";

// import { GoogleLogin } from "react-google-login";

const initialState = {
  email: "",
  password: "",
};

type Props = {

};


const Login: React.FC<Props> = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useAppSelector((state: RootState) => ({ ...state.auth }));
  const { email, password } = formValue;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

    useEffect(() => {
      error && toast.error(error);
    }, [error]);

  const handleSubmit = (e:any) => {
     e.preventDefault();
       if (email && password) {
         dispatch(login({
           formValue, navigate, toast,
           result: undefined
         }));
       }
  };

  const onInputChange = (e:any) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

   const googleSuccess = (resp:any) => {
     const email = resp?.profileObj?.email;
     const name = resp?.profileObj?.name;
     const token = resp?.tokenId;
     const googleId = resp?.googleId;
     const result = { email, name, token, googleId };
     dispatch(googleSignIn({
       result, navigate, toast,
       formValue: undefined
     }));
   };
  //  const googleFailure = (error:any) => {
  //    toast.error(error);
  //  };

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
          <h5>Welcome!!!</h5>
          <MDBIcon fas icon="user-circle" className="fa-2x" />
          <h5>Sign In</h5>
          <MDBCardBody>
            <MDBValidation
              onSubmit={handleSubmit}
              noValidate
              className="row g-3"
            >
              <div className="col-md-12">
                <MDBInput
                  label="Email"
                  type="email"
                  value={email}
                  name="email"
                  onChange={onInputChange}
                  required
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
                />
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
                  Login
                </MDBBtn>
              </div>
            </MDBValidation>
            <br />
            {/* <GoogleLogin
            clientId="399597833600-9pf3rq0ipmbq150518t8rh9ntj61i3lt.apps.googleusercontent.com"
            render={(renderProps) => (
              <MDBBtn
                style={{ width: "100%" }}
                color="danger"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <MDBIcon className="me-2" fab icon="google" /> Google Sign In
              </MDBBtn>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          /> */}
            <GoogleLogin
              clientId="399597833600-9pf3rq0ipmbq150518t8rh9ntj61i3lt.apps.googleusercontent.com"
              render={(renderProps) => (
                <MDBBtn
                  style={{ width: "100%" }}
                  color="danger"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <MDBIcon className="me-2" fab icon="google" /> Google Sign In
                </MDBBtn>
              )}
              onSuccess={googleSuccess}
              onFailure={() => {}}
            />
          </MDBCardBody>
          <MDBCardFooter>
            <Link to="/resetPassword">
              <p>Forgot Password ? Reset</p>
            </Link>
            <Link to="/register">
              <p>Don't have an account ? Sign Up</p>
            </Link>
          </MDBCardFooter>
        </MDBCard>
      </div>
    </div>
  );
};

export default Login

