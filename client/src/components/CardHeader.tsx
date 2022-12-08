import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";
import './CardHeader.css'

export default function CardHeader() {
  return (
    <MDBCard background="dark" className="text-white">
      <MDBCardImage
        overlay
        src="https://www.musicinstruments.in/banner2.jpg"
        alt="..."
      />
      <MDBCardOverlay>
        <MDBCardTitle></MDBCardTitle>
        <MDBCardText
          className="text_Header"
          style={{
            marginTop: "4rem",
            marginLeft: "60rem",
            objectFit: "contain",
          }}
        >
          {/* “The best cure for a ton of abandoned shopping carts? <br />
          Four words: Free shipping. <br />
          Free returns. <br /> Make your orders with zero worries */}
        </MDBCardText>
        <MDBCardText
          className="text_Header"
           style={{
            marginTop: "4rem",
            marginLeft: "60rem",
            textDecoration: "underline",
          }}
        >
          {/* Enjoy the world of MUSIC */}
        </MDBCardText>
      </MDBCardOverlay>
    </MDBCard>
  );
}
