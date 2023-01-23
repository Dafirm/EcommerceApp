import { useEffect, useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import { setLogout } from "../redux/slices/authSlice";
import { RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import SearchInput from "./SearchInput";
import "./Header.css";
import { selectGetTotalQuantity } from "redux/slices/cartSlice";
// import { addToCart, CartProduct } from "redux/slices/cartSlice";
// import { selectItems } from "redux/slices/cartSlice";
// import { getMemorizedNumItems } from "redux/slices/cartSlice";

const HeaderAdmin = () => {
  const [show, setShow] = useState(false);

  const dispatch = useAppDispatch();

  // const numItems = useAppSelector(getMemorizedNumItems);

  const { auth } = useAppSelector((state: RootState) => state);
  const carts = useAppSelector((state: RootState) => state.cart);
  const user = auth.user;

  const handleLogout = (e: any) => {
    e.preventDefault();
    dispatch(setLogout(user));
  };
const quantityItems = useAppSelector(selectGetTotalQuantity);


  //  const Items = useAppSelector(selectItems);
  return (
    <MDBNavbar fixed="top" expand="lg" style={{ backgroundColor: "#000F03" }}>
      <MDBContainer>
        <MDBNavbarBrand
          href="/"
          style={{
            color: "#ffff",
            fontWeight: "600",
            fontSize: "26px",
            marginRight: "70px",
          }}
        >
          Dafirm
          <span
            style={{ color: "orange", fontWeight: "600", fontSize: "36px" }}
          >
            Music
          </span>
          <span style={{ fontWeight: "300", fontSize: "34px" }}>Store</span>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toogle navigation"
          onClick={() => setShow(!show)}
          style={{ color: "#ffff" }}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse show={show} navbar>
          {/* <MDBNavbarItem style={{ margin: "0 auto" }}> */}
          <MDBNavbarLink>
            <SearchInput />
          </MDBNavbarLink>
          {/* </MDBNavbarItem> */}

          <MDBNavbarNav
            right
            fullWidth={false}
            className="mb-2 mb-lg-0"
            style={{ marginTop: "20px" }}
          >
            <MDBNavbarItem>
              <MDBNavbarLink href="/">
                <p
                  style={{
                    color: "#ffff",
                    fontSize: "15px",
                  }}
                  className="header-text"
                >
                  Home
                </p>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href="/addProduct">
                <p
                  style={{
                    color: "#ffff",
                    fontSize: "15px",
                  }}
                  className="header-text"
                >
                  Add Product
                </p>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/dashboard">
                <p
                  style={{
                    color: "#ffff",
                    fontSize: "15px",
                  }}
                  className="header-text"
                >
                  Dashboard
                </p>
              </MDBNavbarLink>
            </MDBNavbarItem>

            {Object.keys(user).length > 0 ? (
              <>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/login">
                    <p
                      style={{
                        color: "#ffff",
                        fontSize: "15px",
                      }}
                      className="header-text"
                      onClick={handleLogout}
                    >
                      Logout
                    </p>
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem className="nav__items__cart">
                  <MDBNavbarLink href="/cart" style={{ position: "relative" }}>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="white"
                        className="bi bi-cart4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                      </svg>
                    </span>
                    {/* &nbsp;&nbsp;{numItems ? numItems : "Cart"} */}
                    {/* <FaShoppingBasket size={20} color="#ffff" /> */}
                  </MDBNavbarLink>
                  <p className="count_cart">
                    {/* &nbsp;&nbsp;{numItems ? numItems : 0} */}
                    {quantityItems}
                  </p>

                  {/* <p className="count_cart"></p> */}
                  {/* {Items.length} */}
                </MDBNavbarItem>
              </>
            ) : (
              <>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/login">
                    <p
                      style={{
                        color: "#ffff",
                        fontSize: "15px",
                      }}
                      className="header-text"
                    >
                      Login
                    </p>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default HeaderAdmin;
