import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Button from "react-bootstrap/Button";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";
import Footer from "./footer";
import LogNavbar from "./lognavbar";
import Alert from "react-bootstrap/Alert";
import { MDBIcon } from "mdb-react-ui-kit";

export default function Contact() {
  const [color, setColor] = useState("#f5f5f5");
  const [textcolor, setTextcolor] = useState("black");
  const [headings, setHeadings] = useState("");
  const [paddingM, setPaddingM] = useState("15px");
  const [paddingR, setPaddingR] = useState("30px");
  const [fontM, setFontM] = useState("25px");
  const [theme, setTheme] = useState(false);
  const [iscontact, setIscontact] = useState();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [ecolor, setEColor] = useState("success");
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

  const handleMessage = (event) => {
    var value = event.target.value;
    if (value.length <= 500) {
      setMessage(value);
    }
  };

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    const email = queryParameters.get("email");
    const contact = queryParameters.get("contact");
    if (email == "false") {
      setIsAlertVisible(true);
      setError("Email is Invalid");
    } else if (contact == "true") {
      setIsAlertVisible(true);
      setError("Thanks for Contacting Us");
    }
    async function fetchData() {
      try {
        const response = await fetch(
          "https://defiant-scarlet-cougar.glitch.me/gettokens"
        );
        const data = await response.json();
        var found = false;
        for (let i = 0; i < data.length; i++) {
          if (data[i].uniqueid == localStorage.getItem("burg-sesh")) {
            found = true;
            setIscontact(true);
            setEmail(data[i].email);
            break;
          }
        }
        if (found == false) {
          setIscontact(false);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
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
  }, []);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (iscontact == true) {
      document.getElementById("contact").submit();
    } else {
      setIsAlertVisible(true);
      setError("Login to Contact");
    }
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
      <div className="contacthead"></div>
      <div className="formbook">
        <center>
          <form
            style={{ textAlign: "left", width: "80%", marginTop: "60px" }}
            id="contact"
            classname="booknow"
            action="https://bird-cyan-moose.glitch.me/contact"
            method="post"
            onSubmit={handleSubmit}
          >
            <MDBRow className="align-items-center">
              <MDBCol md="6">
                <MDBInput
                  id="name"
                  name="firstname"
                  required
                  hint="First Name"
                  style={{
                    backgroundColor: "#D8D8D8",
                    color: "black",
                  }}
                />
                <span id="name-error" style={{ marginTop: "-15px" }}></span>
              </MDBCol>
              <MDBCol md="6">
                <MDBInput
                  id="name"
                  name="lastname"
                  required
                  hint="Last Name"
                  style={{
                    backgroundColor: "#D8D8D8",
                    color: "black",
                  }}
                />
                <span id="name-error" style={{ marginTop: "-15px" }}></span>
              </MDBCol>
            </MDBRow>

            <MDBRow className="align-items-center">
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
              <MDBCol md="6">
                <MDBInput
                  id="contact"
                  required
                  name="contact"
                  hint="Telephone no"
                  style={{
                    backgroundColor: "#D8D8D8",
                    color: "black",
                  }}
                />
                <span id="contact-error" style={{ marginTop: "-15px" }}></span>
              </MDBCol>
            </MDBRow>

            <MDBRow className="align-items-center">
              <MDBCol md="12">
                <MDBInput
                  id="message"
                  name="message"
                  required
                  type="textarea"
                  hint="Your Message"
                  value={message}
                  onChange={handleMessage}
                  style={{
                    backgroundColor: "#D8D8D8",
                    color: "black",
                    height: "130px",
                  }}
                />
                <span id="message-error" style={{ marginTop: "-15px" }}></span>
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
            >
              Send a Message
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
