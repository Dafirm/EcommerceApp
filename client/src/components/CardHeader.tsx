import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";

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
        <MDBCardText>
          “The best cure for a ton of abandoned shopping carts? Four words: Free
          shipping. Free returns.”
        </MDBCardText>
        <MDBCardText>Continue shopping!!!</MDBCardText>
      </MDBCardOverlay>
    </MDBCard>
  );
}
