import { MDBContainer, MDBNavbar } from 'mdb-react-ui-kit';
import React from 'react'
import { Direction } from 'react-toastify/dist/utils';


const date = new Date()
const year = date.getFullYear()
const Footer = () => {
  return (
    <MDBNavbar
      fixed="bottom"
      expand="lg"
      style={{
        backgroundColor: "#000F03",
        fontWeight: "50px",
        color: "white",
        fontSize: "12px",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"

      }}
    >
      <MDBContainer>
        &copy; {year} All Rights Reserved.
        <span style={{ fontWeight: "100px", fontSize: "12px" }}>
          DafirmMusic
        </span>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Footer