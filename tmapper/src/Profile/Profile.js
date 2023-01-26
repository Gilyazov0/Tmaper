import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Profile.css";

export default function PersonalProfile({ profileData }) {
  const { employeeName, position, department, employeeColor } = profileData;

  return (
    <section>
      <MDBContainer>
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol style={{width: "inherit"}}>
            <MDBCard style={{ borderRadius: ".5rem" }}>
              <MDBRow className="g-0">
                <MDBCol
                  md="4"
                  className="gradient-custom text-center text-white"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                  }}
                >
                  <MDBCardImage
                    src={require("../images/user-avatar.png")}
                    alt="Avatar"
                    className="my-5"
                    style={{ width: "80px", borderRadius: "50%" }}
                    fluid
                  />
                  <MDBTypography tag="h5" style={{color:"black"}}>{employeeName}</MDBTypography>
                  <MDBCardText style={{color:"black"}}>Web Designer</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Department</MDBTypography>
                        <MDBCardText className="text-muted">
                          {`Department ${department}`}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Color</MDBTypography>
                        <MDBCardText className="text-muted">Red</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
