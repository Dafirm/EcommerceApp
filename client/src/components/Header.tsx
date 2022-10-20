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
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";


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

            {user ? (
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
              </>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
    
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;






// import React from "react";
// import { Grid, MenuItem } from "@mui/material";

// import { ThemeContext } from "../App";
// import DropDown from "./DropDown";

// const Header = () => {
//   const { setTheme } = React.useContext(ThemeContext);
//   const menuItems = [
//     { label: "Dark", action: () => setTheme("dark") },
//     { label: "Light", action: () => setTheme("light") },
//     { label: "Orange", action: () => setTheme("orange") },
//   ];
//   return (
//     <header style={{ width: "100%" }}>
//       <Grid
//         container
//         spacing={6}
//         columns={12}
//         sx={{ maxWidth: "95%", margin: "0 auto" }}
//       >
//         <Grid container item sm={12} sx={{ justifyContent: "flex-end" }}>
//           <DropDown>
//             {menuItems.map((item) => (
//               <MenuItem key={item.label} onClick={item.action}>
//                 {item.label}
//               </MenuItem>
//             ))}
//           </DropDown>
//         </Grid>
//       </Grid>
//     </header>
//   );
// };
// export default Header;

//
