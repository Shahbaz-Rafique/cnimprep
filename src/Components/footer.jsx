import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer({ style }) {
  return (
    <MDBFooter className="text-center text-lg-start" style={style}>
      <section className="" style={{ paddingTop: "25px" }}>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ textAlign: "center" }}
              >
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                Socials
              </h6>
              <div>
                <div
                  className="d-flex flex-wrap"
                  style={{ justifyContent: "center", marginLeft: "25px" }}
                >
                  <a
                    href="https://www.facebook.com/"
                    className="me-3 text-reset"
                  >
                    <MDBIcon
                      fab
                      icon="facebook-f"
                      style={{
                        color: "white",
                        backgroundColor: "rgb(108, 117, 125)",
                        padding: "10px",
                        paddingRight: "11px",
                        paddingLeft: "11px",
                        borderRadius: "48%",
                      }}
                    />
                  </a>
                  <a href="https://twitter.com/" className="me-3 text-reset">
                    <MDBIcon
                      fab
                      icon="twitter"
                      style={{
                        color: "white",
                        backgroundColor: "rgb(108, 117, 125)",
                        padding: "10px",
                        borderRadius: "48%",
                      }}
                    />
                  </a>
                  <a href="https://www.google.com/" className="me-3 text-reset">
                    <MDBIcon
                      fab
                      icon="google"
                      style={{
                        color: "white",
                        backgroundColor: "rgb(108, 117, 125)",
                        padding: "10px",
                        borderRadius: "48%",
                      }}
                    />
                  </a>
                </div>
                <div
                  className="d-flex flex-wrap"
                  style={{
                    marginTop: "10px",
                    justifyContent: "center",
                    marginLeft: "25px",
                  }}
                >
                  <a
                    href="https://www.instagram.com/"
                    className="me-3 text-reset"
                  >
                    <MDBIcon
                      fab
                      icon="instagram"
                      style={{
                        color: "white",
                        backgroundColor: "rgb(108, 117, 125)",
                        padding: "10px",
                        borderRadius: "48%",
                      }}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    className="me-3 text-reset"
                  >
                    <MDBIcon
                      fab
                      icon="linkedin"
                      style={{
                        color: "white",
                        backgroundColor: "rgb(108, 117, 125)",
                        padding: "10px",
                        borderRadius: "48%",
                      }}
                    />
                  </a>
                  <a href="https://github.com/" className="me-3 text-reset">
                    <MDBIcon
                      fab
                      icon="github"
                      style={{
                        color: "white",
                        backgroundColor: "rgb(108, 117, 125)",
                        padding: "10px",
                        borderRadius: "48%",
                      }}
                    />
                  </a>
                </div>
                <div
                  className="d-flex flex-wrap"
                  style={{
                    marginTop: "10px",
                    justifyContent: "center",
                    marginLeft: "25px",
                  }}
                >
                  <a
                    href="https://www.youtube.com/"
                    className="me-3 text-reset"
                  >
                    <MDBIcon
                      fab
                      icon="youtube"
                      style={{
                        color: "white",
                        backgroundColor: "rgb(108, 117, 125)",
                        padding: "10px",
                        borderRadius: "48%",
                      }}
                    />
                  </a>
                  <a href="https://discord.com/" className="me-3 text-reset">
                    <MDBIcon
                      fab
                      icon="discord"
                      style={{
                        color: "white",
                        backgroundColor: "rgb(108, 117, 125)",
                        padding: "10px",
                        borderRadius: "48%",
                      }}
                    />
                  </a>
                </div>
              </div>
            </MDBCol>

            <MDBCol
              md="2"
              lg="2"
              xl="2"
              className="mx-auto mb-4"
              style={{ textAlign: "center" }}
            >
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ textAlign: "center" }}
              >
                Products
              </h6>
              <p>
                <a href="https://www.youtube.com/" className="text-reset">
                  Link 1
                </a>
              </p>
              <p>
                <a href="https://www.youtube.com/" className="text-reset">
                  Link 2
                </a>
              </p>
              <p>
                <a href="https://www.youtube.com/" className="text-reset">
                  Link 3
                </a>
              </p>
              <p>
                <a href="https://www.youtube.com/" className="text-reset">
                  Link 4
                </a>
              </p>
            </MDBCol>

            <MDBCol
              md="3"
              lg="2"
              xl="2"
              className="mx-auto mb-4"
              style={{ textAlign: "center" }}
            >
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="/booking" className="text-reset">
                  Booking
                </a>
              </p>
              <p>
                <a href="/about-us" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="/contact-us" className="text-reset">
                  Contact
                </a>
              </p>
            </MDBCol>

            <MDBCol
              md="4"
              lg="3"
              xl="3"
              className="mx-auto mb-md-0 mb-4"
              style={{ textAlign: "center" }}
            >
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Germany , Address
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 49
                234 567 88
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 49
                234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <p style={{ display: "flex", justifyContent: "center" }}>
          <a href="/impressum" style={{ color: "rgb(126, 192, 47)" }}>
            Imprint
          </a>
        </p>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          {" "}
          BURG BRÄUSTÜBL
        </a>
      </div>
    </MDBFooter>
  );
}
