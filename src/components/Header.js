import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBIcon,
  MDBCardTitle,
  MDBCardText,
  MDBCard
} from "mdbreact";
import profileImg from "../assets/profile.jpg";
import reactLogo from "../assets/reactlogo.png";

class Header extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <>
        <Router>
          <div>
            <MDBNavbar dark expand="md" fixed="top" scrolling color="black">
              <MDBContainer>
                <MDBNavbarBrand style={{ marginRight: 10 }}>
                  <strong className="white-text">
                    Shawn Antonucci's Portfolio
                  </strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={this.state.collapsed} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="#!">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">About</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Work</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Certificates</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Contact</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarToggler onClick={this.toggleCollapse} />
                  <MDBCollapse
                    id="navbarCollapse3"
                    isOpen={this.state.isOpen}
                    navbar
                  >
                    <MDBNavbarNav left>
                      <MDBNavItem />
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                      <MDBNavItem>
                        <MDBNavLink
                          className="waves-effect waves-light"
                          to="#"
                          onClick={() =>
                            (window.location.href =
                              "https://github.com/shawnantonucci")
                          }
                        >
                          GitHub
                          <MDBIcon fab icon="github" />
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem />
                      <MDBNavItem />
                    </MDBNavbarNav>
                  </MDBCollapse>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapsed && overlay}
          </div>
        </Router>
        <MDBView
          src={`https://firebasestorage.googleapis.com/v0/b/shawn-react-portfolio.appspot.com/o/images%2FLA-skyline.gif?alt=media&token=5cc3afb8-03e8-4106-99ba-53f45f7f1eb0`}
        >
          <MDBMask className="rgba-black-light d-flex justify-content-center align-items-center">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="12" className="mb-4 white-text text-center">
                  <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 ">
                    Hello, I am Shawn,
                  </h1>
                  <hr className="hr-light my-4" />
                  <h5 className="mb-4 white-text ">
                    {/* <strong>Hello, I am Shawn,</strong> */}
                    <p>a web developer</p>
                  </h5>
                  <MDBBtn outline color="white">
                    About me
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
        <MDBContainer fluid style={{ margin: "5% 0" }}>
          <MDBRow
            style={{
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center"
            }}
          >
            <MDBCol md="4" style={{ display: "flex" }}>
              <div>
                <img
                  src={profileImg}
                  alt="thumbnail"
                  // className="img-thumbnail rounded mx-auto d-block img-fluid z-depth-2"
                  style={{ alignSelf: "center", width: "18rem", height: "auto" }}
                />
              </div>
              <div>
                <img
                  src={reactLogo}
                  alt="thumbnail"
                  // className="img-thumbnail"
                  style={{ alignSelf: "center", width: "10rem" }}
                />
              </div>
            </MDBCol>
            <MDBCard
              className="card-body"
              style={{ width: "44rem", marginTop: "1rem" }}
            >
              <MDBCardTitle>Who am I?</MDBCardTitle>
              <MDBCardText>
                Having completed the front-end and back-end programs with a 100%
                mastery rate, I am currently a Full-Time and Part-time Project
                Manager for Two classes of Fullstack Web Development at Lambda
                School working remote. I was born and raised in New York. I am
                currently living in Los Angeles with my wife and daughter. I
                have always had a passion for technology and computers. From an
                early age I loved to tinker with all sorts of electronics and
                during my highschool years I became very interested in software,
                web, mobile, and game development.
              </MDBCardText>
            </MDBCard>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}

export default Header;
