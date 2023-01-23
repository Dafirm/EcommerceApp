
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
import {  googleSignIn, login } from "../redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { Decoded } from "types";
import { UserInfo } from "os";
import { setToken, setLoginStatus, setUserInfo } from "redux/slices/userSlice";



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

   const handleSuccess = (resp:any) => {
   
     const email = resp?.profileObj?.email;
     const name = resp?.profileObj?.name;
     const token = resp?.profileObj?.data;
     const googleId = resp?.googleId;
     const result = { email, name, token, googleId };
    

     dispatch(
       googleSignIn({
         result,
         navigate,
         toast,
         formValue: undefined,
       })
     );
       
 
   };



   const googleFailure = (error:any) => {
     toast.error(error);
   };

  // const handleSuccess = async (credentialResponse: CredentialResponse) => {
  //   console.log(credentialResponse.credential);
  //   const res = await axios.post(
  //     "http://localhost:4000/api/v1/auth",
  //     {},
  //     {
  //       headers: {
  //         id_token: credentialResponse.credential as string,
  //       },
  //     }
  //   );

  //   const { token } = res.data;

  //   localStorage.setItem("library-access-token", token);

  //   const decoded = jwt_decode(token) as Decoded;
  //   console.log("set login ", decoded);

  //   if (decoded.userInfo) {
  //     dispatch(setToken(token));
  //     dispatch(setLoginStatus(true));
  //     dispatch(setUserInfo(decoded.userInfo));
  //   }

  //   navigate("/");
  // };

    // const handleSuccess = async (response: any) => {
    //   console.log("response:", response);

    //   const res = await axios.post(
    //     "http://localhost:4000/api/v1/auth",
    //     {},
    //     {
    //       headers: {
    //         id_token: response.credential,
    //       },
    //     }
    //   );
    //   const userToken = res.data.token;
    //   localStorage.setItem("DafirmMusic-store-token", userToken);
    //   setToken(userToken);
    // };

    //   useEffect(() => {
    //     const storageToken = localStorage.getItem("candy-store-token") || "";
    //     if (storageToken !== "") {
    //       const decoded = jwt_decode(storageToken) as User;
    //       dispatch(setUser(decoded));
    //     }
    //   }, [dispatch, setToken]);

  

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
            <GoogleLogin
              onSuccess={handleSuccess}
              onError={() => {
                console.log("Login Failed");
              }}
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




