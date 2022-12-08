import { useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useAppDispatch } from "./redux/hooks";
import { setUser } from "./redux/slices/authSlice";
import PrivateRoute from "./components/PrivateRoute";
import AddEditProduct from "./pages/AddEditProduct";
import SingleProduct from "./pages/SingleProduct";

import Dashboard from "./pages/Dashboard";
import NotFound from "components/NotFound";
import Cart from "pages/Cart";
import Footer from "components/Footer";
import ResetPassword from "pages/ResetPassword";



function App() {
   const dispatch = useAppDispatch();
   const user = JSON.parse(localStorage.getItem("profile") || '{}');
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
          <Route
            path="/products/:id"
            element={
              <SingleProduct
                images={""}
                description={""}
                title={""}
                _id={""}
                categories={""}
                sizes={""}
                price={""} cartQuantity={0}              />
            }
          />

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
                <AddEditProduct />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashbard"
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
