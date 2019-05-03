import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask
} from "mdbreact";

const CarouselPage = () => {
  return (
    <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100 h-100"
              src="https://firebasestorage.googleapis.com/v0/b/shawn-react-portfolio.appspot.com/o/work%2Flamdanotes.PNG?alt=media&token=805f6a5a-2818-4740-b4b9-cf309b16681d"
              alt="Lambda Notes"
            />
            <MDBMask overlay="black-slight" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100 h-100"
              src="https://firebasestorage.googleapis.com/v0/b/shawn-react-portfolio.appspot.com/o/work%2FS%26J-min.PNG?alt=media&token=1c90fdd0-9068-4a8c-8c82-0bff88f856fc"
              alt="S&J Architects"
            />
            <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption style={{ top: "5%" }}>
            <p style={{ color: "black", fontWeight: "bold", fontSize: "30px" }}>
              S&J Architects
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100 h-100"
              src="https://firebasestorage.googleapis.com/v0/b/shawn-react-portfolio.appspot.com/o/work%2FBellottis-cleaning-service-min.PNG?alt=media&token=30554587-11fa-44ab-9f4c-11db7cf7fab6"
              alt="Bellotti's Cleaning"
            />
            <MDBMask overlay="black-slight" />
          </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default CarouselPage;
