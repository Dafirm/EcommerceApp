import { useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./components/Header1";
import { useAppDispatch } from "./redux/hooks";
import { setUser } from "./redux/slices/authSlice";
import PrivateRoute from "./components/PrivateRoute";
import AddEditProduct from "./pages/AddProduct";
import SingleProduct from "./pages/SingleProduct";

import Dashboard from "./pages/Dashboard";
import NotFound from "components/NotFound";
import Cart from "pages/Cart";
import Footer from "components/Footer";
import ResetPassword from "pages/ResetPassword";
import UpdateProduct from "pages/UpdateProduct";
import Profile from "pages/Profile";


//-----TODO------
// singlePage
// Add to cart on single page
// Cart state restore
// Delete single cart
// Cart increment
// checkout
// Adminpage
// Dashboard
// display user first name on header
//  create user profile
// Landing page
//  <Route path="/products/:id" element={<SingleProduct />} />
//<Route path="/products/:id" element={<SingleProduct />} />;
//user get one more prop called cartList which will be an array of strings(productId)

function App() {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem("profile") || "{}");
  useEffect(() => {
    dispatch(setUser(user));
  }, [dispatch, user]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products/:id" element={<SingleProduct _id={""} title={""} images={""} description={""} category={""} size={0} price={0} cartQuantity={0} />} />

          <Route
            path="/addProduct"
            element={
              <PrivateRoute>
                <AddEditProduct />
              </PrivateRoute>
            }
          />
          <Route
            path="/editProduct/:id"
            element={
              <PrivateRoute>
                <UpdateProduct />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
