import React from "react";
import { MDBCol, MDBCardTitle } from "mdbreact";

const Banner = props => {
  return (
    <MDBCol
      className="text-white text-center"
      style={{
        backgroundColor: "black"
      }}
    >
      <MDBCol className="py-5" style={{ margin: 0 }}>
        <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
          {props.message}
        </MDBCardTitle>
      </MDBCol>
    </MDBCol>
  );
};

export default Banner;
