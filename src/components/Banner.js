import React from "react";
import { MDBBtn, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

const Banner = () => {
  return (
    <MDBCol
      className="text-white text-center"
      style={{
        backgroundColor: "black"
      }}
    >
      <MDBCol className="py-5" style={{ margin: 0 }}>
        <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
          I create websites exactly how my clients want them.<br></br> Responsive, neat
          and clean!
        </MDBCardTitle>
        {/* <p className="mx-5 mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          fugiat, laboriosam, voluptatem, optio vero odio nam sit officia
          accusamus minus error nisi architecto nulla ipsum dignissimos. Odit
          sed qui, dolorum!
        </p> */}
        <MDBBtn outline color="white" className="mb-5">
          <MDBIcon icon="clone" className="mr-2" /> View projects
        </MDBBtn>
      </MDBCol>
    </MDBCol>
  );
};

export default Banner;
