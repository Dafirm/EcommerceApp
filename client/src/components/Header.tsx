import React, { useState } from "react";
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
import SearchInput from './SearchInput'
import { Link } from "react-router-dom";




const Header = () => {
  const [show, setShow] = useState(false);
 
  const dispatch = useAppDispatch();
  

 
  const { user } = useAppSelector((state:RootState) => ({ ...state.auth }));
  
 const handleLogout = (e:any) => {
  e.preventDefault()
    dispatch(setLogout(user));

  
    
  };
  return (
    <MDBNavbar fixed="top" expand="lg" style={{ backgroundColor: "#000F03" }}>
      <MDBContainer>
        <MDBNavbarBrand
          href="/"
          style={{ color: "#ffff", fontWeight: "600", fontSize: "26px" }}
        >
          DafirmMusic Store
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
        <SearchInput />
        <MDBCollapse show={show} navbar>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink href="/">
                <p
                  style={{
                    color: "#ffff",
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
                      }}
                      className="header-text"
                      onClick={handleLogout}
                    >
                      Logout
                    </p>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </>
            ) : (
              <>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/login">
                    <p
                      style={{
                        color: "#ffff",
                      }}
                      className="header-text"
                    >
                      Login
                    </p>
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink>
                    <Link to="/checkout-page" style={{ color :"white" }}>
                      cart
                    </Link>
                    
                        {/* <ShoppingCartIcon /> */}
                    
                  
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

export default Header;




