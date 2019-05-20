import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardHeader,
  MDBRow,
  MDBContainer
} from "mdbreact";
import projects from "./projectData";

const PanelPage = props => {
  return (
    <MDBContainer>
      <div>
        <h2 style={{ textAlign: "center", margin: 30 }}>My Projects</h2>
      </div>
      <MDBRow center>
        {projects.map(project => {
          return (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginBottom: 25 }}
            >
              <MDBCard
                border="info"
                className="m-3"
                style={{ maxWidth: "18rem" }}
              >
                <MDBCardHeader>{project.name}</MDBCardHeader>
                <MDBCardBody className="text-info">
                  <img
                    src={project.image}
                    alt="project img"
                    style={{ width: "100%", height: "170px", marginBottom: 5 }}
                  />
                  <MDBCardText>
                    ReCaller allows you to schedule phone calls with the people
                    you care about.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </a>
          );
        })}
      </MDBRow>
    </MDBContainer>
  );
};

export default PanelPage;
