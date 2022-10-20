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



function App() {
   const dispatch = useAppDispatch();
   const user = JSON.parse(localStorage.getItem("profile") || '{}');
   useEffect(() => {
     dispatch(setUser(user));
   }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          {/* <Route path="/addProduct" element={<AddEditProduct />} /> */}
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
