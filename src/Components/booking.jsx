import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Button from "react-bootstrap/Button";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";
import { MDBIcon } from "mdb-react-ui-kit";
import Footer from "./footer";
import Alert from "react-bootstrap/Alert";
import LogNavbar from "./lognavbar";

export default function Booking() {
  const [color, setColor] = useState("#f5f5f5");
  const [textcolor, setTextcolor] = useState("black");
  const [headings, setHeadings] = useState("");
  const [paddingM, setPaddingM] = useState("15px");
  const [paddingR, setPaddingR] = useState("30px");
  const [fontM, setFontM] = useState("25px");
  const [theme, setTheme] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [ecolor, setEColor] = useState("success");
  const [isbook, setIsbook] = useState();
  const [footerStyle, setFooterStyle] = useState({
    backgroundColor: "",
    marginTop: "60px",
  });
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleAlertToggle = () => {
    setIsAlertVisible(!isAlertVisible);
  };

  let screenWidth = window.innerWidth;
  window.addEventListener("resize", () => {
    screenWidth = window.innerWidth;
    if (screenWidth < 727) {
      setPaddingM("5px");
      setFontM("15px");
      setPaddingR("10px");
    }
  });

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    const email = queryParameters.get("email");
    const booking = queryParameters.get("booking");
    if (email == "false") {
      setIsAlertVisible(true);
      setError("Email is Invalid");
    } else if (booking == "true") {
      setIsAlertVisible(true);
      setError("We will call you shorlty for Confirmation.");
    }
    document.body.style.backgroundColor = "rgb(225, 229, 236)";
    var mode = localStorage.getItem("mode");
    if (mode == null || mode == "light") {
      setTheme(false);
      setColor("#f5f5f5");
      setTextcolor("black");
      setHeadings("rgb(29, 55, 104)");
      setFooterStyle({
        backgroundColor: "rgb(248, 249, 250)",
        marginTop: "60px",
        color: "rgb(108, 117, 125)",
      });
    }
    if (mode == "dark") {
      setTheme(true);
      setColor("#343434");
      setTextcolor("white");
      setHeadings("white");
      setFooterStyle({
        backgroundColor: "#28282B",
        marginTop: "60px",
        color: "white",
      });
    }
    let screenWidth = window.innerWidth;
    if (screenWidth < 727) {
      setPaddingM("7px");
      setFontM("15px");
      setPaddingR("10px");
    }
    async function fetchData() {
      try {
        const response = await fetch(
          "https://bird-cyan-moose.glitch.me/gettokens"
        );
        const data = await response.json();
        var found = false;
        for (let i = 0; i < data.length; i++) {
          if (data[i].uniqueid == localStorage.getItem("burg-sesh")) {
            found = true;
            setEmail(data[i].email);
            setIsbook(true);
            break;
          }
        }
        if (found == false) {
          setIsbook(false);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const handleMode = () => {
    setTheme(!theme);
    if (!theme == true) {
      localStorage.setItem("mode", "dark");
      setColor("#343434");
      setTextcolor("white");
      setHeadings("white");
      setFooterStyle({
        backgroundColor: "#28282B",
        marginTop: "60px",
        color: "white",
      });
    } else {
      localStorage.setItem("mode", "light");
      setColor("#f5f5f5");
      setTextcolor("black");
      setHeadings("rgb(29, 55, 104)");
      setFooterStyle({
        backgroundColor: "rgb(248, 249, 250)",
        marginTop: "60px",
        color: "rgb(108, 117, 125)",
      });
    }
  };

  const handleBooking = (event) => {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var arrival = document.getElementById("arrival").value;
    var departure = document.getElementById("departure").value;
    var adults = document.getElementById("adults").value;
    var children = document.getElementById("children").value;
    if (
      name == "" ||
      email == "" ||
      contact == "" ||
      arrival == "" ||
      departure == "" ||
      adults == "" ||
      children == ""
    ) {
      setIsAlertVisible(true);
      setError("Fill all the fields");
    } else {
      if (isbook == true) {
        document.getElementById("booknow").submit();
      } else if (isbook == false) {
        setIsAlertVisible(true);
        setError("Login For Booking");
      }
    }
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleClose = (event) => {
    document.getElementById("error").style.display = "none";
  };

  return (
    <div style={{ backgroundColor: `${color}` }}>
      {localStorage.getItem("burg-id") == "true" ? <LogNavbar /> : <Navbar />}
      <div
        className="modeB"
        style={{
          backgroundColor: "#808080",
          display: "inline-block",
          position: "fixed",
          borderRadius: "0px 15px 15px 0px",
          zIndex: 9999,
        }}
      >
        <a
          href="#"
          style={{
            color: "yellow",
            padding: `${paddingM}`,
            paddingRight: `${paddingR}`,
            display: "block",
          }}
          onClick={handleMode}
        >
          <i
            class={
              theme ? "dark-mode-icon fas fa-sun" : "dark-mode-icon fas fa-moon"
            }
            style={{ fontSize: `${fontM}` }}
          ></i>
        </a>
      </div>
      <div className="bookhead"></div>
      <div className="formbook">
        <center>
          <form
            style={{ textAlign: "left", width: "80%", marginTop: "60px" }}
            id="booknow"
            classname="booknow"
            action="https://bird-cyan-moose.glitch.me/booking"
            method="post"
          >
            <Alert
              variant={ecolor}
              style={{ display: "none", textAlign: "center" }}
              id="error"
            >
              {error}{" "}
              <a onClick={handleClose} style={{ color: "blue" }}>
                close
              </a>
            </Alert>
            <h5 style={{ color: `${headings}` }}>Personal Details</h5>
            <MDBRow className="align-items-center">
              <MDBCol md="6">
                <MDBInput
                  id="name"
                  name="name"
                  hint="Enter Name"
                  required
                  style={{
                    backgroundColor: "#D8D8D8",
                    color: "black",
                  }}
                />
                <span id="name-error" style={{ marginTop: "-15px" }}></span>
              </MDBCol>
              <MDBCol md="6">
                <MDBInput
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                  required
                  hint="Your Email"
                  style={{
                    backgroundColor: "#D8D8D8",
                    color: "black",
                  }}
                />
                <span id="email-error" style={{ marginTop: "-15px" }}></span>
              </MDBCol>
            </MDBRow>

            <MDBRow className="align-items-center">
              <MDBCol md="6">
                <MDBInput
                  id="contact"
                  name="contact"
                  required
                  hint="Telephone no"
                  style={{
                    backgroundColor: "#D8D8D8",
                    color: "black",
                  }}
                />
                <span id="contact-error" style={{ marginTop: "-15px" }}></span>
              </MDBCol>
            </MDBRow>

            <h5 style={{ color: `${headings}` }}>Timing</h5>
            <MDBRow className="align-items-center">
              <MDBCol md="6">
                <label htmlFor="" style={{ color: `${textcolor}` }}>
                  Arrival Time
                </label>
                <MDBInput
                  id="arrival"
                  name="arrival"
                  required
                  type="datetime-local"
                  style={{
                    backgroundColor: "#D8D8D8",
                    color: "black",
                  }}
                />
                <span id="contact-error" style={{ marginTop: "-15px" }}></span>
              </MDBCol>
              <MDBCol md="6">
                <label htmlFor="" style={{ color: `${textcolor}` }}>
                  Departure Time
                </label>
                <MDBInput
                  id="departure"
                  name="departure"
                  required
                  type="datetime-local"
                  style={{
                    backgroundColor: "#D8D8D8",
                    color: "black",
                  }}
                />
                <span id="contact-error" style={{ marginTop: "-15px" }}></span>
              </MDBCol>
            </MDBRow>
            <h5 style={{ color: `${headings}` }}>Attendants</h5>
            <MDBRow className="align-items-center">
              <MDBCol md="6">
                <MDBInput
                  id="adults"
                  name="adults"
                  type="number"
                  required
                  hint="Number of Adults"
                  style={{
                    backgroundColor: "#D8D8D8",
                    color: "black",
                  }}
                />
                <span id="adults-error" style={{ marginTop: "-15px" }}></span>
              </MDBCol>
              <MDBCol md="6">
                <MDBInput
                  id="children"
                  name="children"
                  type="number"
                  required
                  hint="Number of Children"
                  style={{
                    backgroundColor: "#D8D8D8",
                    color: "black",
                  }}
                />
                <span id="children-error" style={{ marginTop: "-15px" }}></span>
              </MDBCol>
            </MDBRow>
            <Button
              type="submit"
              style={{
                backgroundColor: "rgb(126, 192, 47)",
                border: "none",
                fontWeight: "bold",
                color: "#25194A",
              }}
              onClick={handleBooking}
            >
              Book Now
            </Button>
          </form>
        </center>
      </div>
      <Footer style={footerStyle} />

      <Alert
        className="alert"
        color="success"
        dismiss
        show={isAlertVisible}
        style={{ zIndex: 9999 }}
        onAnimationEnd={() => setIsAlertVisible(false)}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{error}</span>
          <span className="alert-dismiss" onClick={handleAlertToggle}>
            <MDBIcon icon="times" />
          </span>
        </div>
      </Alert>
    </div>
  );
}
