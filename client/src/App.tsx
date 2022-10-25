import { useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useAppDispatch } from "./redux/hooks";
import { setUser } from "./redux/slices/authSlice";
import PrivateRoute from "./components/PrivateRoute";
// import NewProduct from "./pages/NewProduct";
import AddEditProduct from "./pages/AddEditProduct";
import SingleProduct from "./pages/SingleProduct";
import Checkout from "./components/Checkout";
import Dashboard from "./pages/Dashboard";



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
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />

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
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/checkout-page" element={<Checkout />} />
     
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
