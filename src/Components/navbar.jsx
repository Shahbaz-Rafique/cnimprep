import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";
import { InputGroup } from "react-bootstrap";
import { Row, Col, Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalReset, setShowModalReset] = useState(false);
  const [showModalforgot, setShowModalforgot] = useState(false);
  const [showverify, setShowverify] = useState(false);
  const [showverified, setShowverified] = useState(false);
  const { pathname } = useLocation();

  const [color, setColor] = useState("#f5f5f5");
  const [textcolor, setTextcolor] = useState("black");
  const [headings, setHeadings] = useState("");
  const [spanerror, setSpanerror] = useState("");
  const [spanver, setSpanver] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [users, setUsers] = useState([]);
  const [random, setRandom] = useState("");
  const [footerStyle, setFooterStyle] = useState({
    backgroundColor: "",
    marginTop: "60px",
  });

  useEffect(() => {
    var mode = localStorage.getItem("mode");
    if (mode == null || mode == "light") {
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
      setColor("#343434");
      setTextcolor("white");
      setHeadings("white");
      setFooterStyle({
        backgroundColor: "#28282B",
        marginTop: "60px",
        color: "white",
      });
    }
    const queryParameters = new URLSearchParams(window.location.search);
    const action = queryParameters.get("action");
    const sent = queryParameters.get("sent");
    const qemail = queryParameters.get("email");
    const resetemail = queryParameters.get("resetemail");
    const code = queryParameters.get("code");
    const pass = queryParameters.get("pass");
    setEmail(qemail);
    setCode(sent);
    if (qemail == "verified") {
      setShowverified(true);
    }
    if (action == "reset" && sent.length == 64) {
      setShowModalforgot(true);
    }
    if (resetemail == "false") {
      setShowModalReset(true);
    }
    setSpanver("");
    setSpanerror("");
    if (code == "wrong") {
      setSpanver("Incorrect Verification Code");
    }
    if (pass == "false") {
      setSpanerror("Incorrect Verification Code");
    }

    fetch("https://defiant-scarlet-cougar.glitch.me/getusers")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    const token = queryParameters.get("token");
    if (token == localStorage.getItem("logtoken")) {
      localStorage.setItem("auth", "true");
    }
    generateRandomPassword();
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };
  const handleCloseLogin = () => {
    setShowModalLogin(false);
  };
  const handleCloseReset = () => {
    setShowModalReset(false);
  };
  const handleCloseforgot = () => {
    setShowModalforgot(false);
  };
  const handlecloseVerified = () => {
    setShowverified(false);
  };
  const handleCloseverify = () => {
    setShowverify(false);
  };
  const handlelogin = () => {
    var mode = localStorage.getItem("mode");
    if (mode == null || mode == "light") {
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
      setColor("#343434");
      setTextcolor("white");
      setHeadings("white");
      setFooterStyle({
        backgroundColor: "#28282B",
        marginTop: "60px",
        color: "white",
      });
    }
    setShowModal(false);
    setShowModalLogin(true);
  };
  const handlesignup = () => {
    var mode = localStorage.getItem("mode");
    if (mode == null || mode == "light") {
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
      setColor("#343434");
      setTextcolor("white");
      setHeadings("white");
      setFooterStyle({
        backgroundColor: "#28282B",
        marginTop: "60px",
        color: "white",
      });
    }
    setShowModalLogin(false);
    setShowModal(true);
  };
  const handleforgot = () => {
    var mode = localStorage.getItem("mode");
    if (mode == null || mode == "light") {
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
      setColor("#343434");
      setTextcolor("white");
      setHeadings("white");
      setFooterStyle({
        backgroundColor: "#28282B",
        marginTop: "60px",
        color: "white",
      });
    }
    setShowModalLogin(false);
    setShowModalReset(true);
  };

  const handleVerification = () => {
    var code = document.getElementById("code").value;
    if (code == "") {
      document.getElementById("vercode-error").innerHTML =
        "Enter Verification Code";
      document.getElementById("vercode-error").style.display = "block";
      document.getElementById("vercode-error").style.color = "red";
    } else {
      document.getElementById("verifyform").submit();
    }
  };

  const LoginAccount = (event) => {
    event.preventDefault();
    var email = document.getElementById("lemail").value;
    var password = document.getElementById("lpassword").value;
    var submit = true;
    if (email == "") {
      submit = false;
      document.getElementById("lemail-error").innerHTML = "Email Required";
      document.getElementById("lemail-error").style.display = "block";
      document.getElementById("lemail-error").style.color = "red";
    } else {
      document.getElementById("lemail-error").style.display = "none";
    }
    if (password == "") {
      submit = false;
      document.getElementById("lpassword-error").innerHTML =
        "Password Required";
      document.getElementById("lpassword-error").style.display = "block";
      document.getElementById("lpassword-error").style.color = "red";
    } else {
      document.getElementById("lpassword-error").style.display = "none";
    }
    if (submit == true) {
      document.getElementById("loginform").submit();
    }
  };

  const handleSignup = () => {
    var Fname = document.getElementById("firstname").value;
    var Lname = document.getElementById("lastname").value;
    var Email = document.getElementById("email").value;
    var Password = document.getElementById("spassword").value;
    var submit = true;
    if (Fname == "") {
      submit = false;
      document.getElementById("firstname-error").innerHTML =
        "First Name is Required";
      document.getElementById("firstname-error").style.color = "red";
      document.getElementById("firstname-error").style.display = "block";
    } else {
      document.getElementById("firstname-error").style.display = "none";
    }
    if (Email == "") {
      submit = false;
      document.getElementById("email-error").innerHTML = "Email is Required";
      document.getElementById("email-error").style.color = "red";
      document.getElementById("email-error").style.display = "block";
    } else {
      document.getElementById("email-error").style.display = "none";
    }
    if (Password == "") {
      submit = false;
      document.getElementById("password-error").innerHTML =
        "Password is Required";
      document.getElementById("password-error").style.color = "red";
      document.getElementById("password-error").style.display = "block";
    } else {
      document.getElementById("password-error").style.display = "none";
    }
    if (submit == true) {
      var already = false;
      users.forEach((element) => {
        if (Email == element.email) {
          already = true;
          document.getElementById("email-error").innerHTML =
            "Email already exists";
          document.getElementById("email-error").style.color = "red";
          document.getElementById("email-error").style.display = "block";
        }
      });
      if (already == false) {
        document.getElementById("registerform").submit();
      }
    }
  };

  function generateRandomPassword() {
    const characters = "0123456789Ghgsduasdyqwkjfhksdjfhjksdhfwefuwehf";
    let password = "";
    for (let i = 0; i < 9; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    setRandom(password);
    localStorage.setItem("logtoken", password);
    return password;
  }

  const handleResetPass = () => {
    var pass = document.getElementById("rpassword").value;
    var Cpass = document.getElementById("cpassword").value;
    var submit = true;
    if (pass != Cpass) {
      submit = false;
      document.getElementById("cpassword-error").innerHTML =
        "Password & Confirm Password must be same";
      document.getElementById("cpassword-error").style.display = "block";
      document.getElementById("cpassword-error").style.color = "red";
    } else {
      document.getElementById("cpassword-error").style.display = "none";
    }
    if (pass.length < 6) {
      submit = false;
      document.getElementById("rpassword-error").innerHTML =
        "Password length must be greater than equal to 6";
      document.getElementById("rpassword-error").style.display = "block";
      document.getElementById("rpassword-error").style.color = "red";
    } else {
      document.getElementById("rpassword-error").style.display = "none";
    }
    if (submit == true) {
      document.getElementById("forgotform").submit();
    }
  };

  return (
    <>
      <div
        className="navbarfull"
        style={{ position: "sticky", top: 0, zIndex: 100 }}
      >
        <Navbar expand="lg">
          <div
            className="brandlogo d-flex align-items-center justify-content-center w-100"
            style={{ marginLeft: "20px" }}
          >
            <a href="/">
              <img
                src="/Assets/hotelbrand.png"
                className="burglogo"
                alt="Hotel Booking"
              />
            </a>
            <h2 className="ml-2 mb-0" style={{ color: "#DAA520" }}>
              BURG BRÄUSTÜBL
            </h2>
          </div>
          <Navbar.Toggle
            aria-controls="navbar-nav"
            style={{ marginTop: "-45px", color: "white", border: "none" }}
          >
            <i className="fas fa-bars"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto" style={{ marginTop: "10px" }}>
              <div className="links-mobile">
                <ul>
                  <li className={pathname === "/" ? "active" : ""}>
                    <Link to="/">HOME</Link>
                  </li>
                  <li className={pathname === "/booking" ? "active" : ""}>
                    <Link to="/booking">BOOKING</Link>
                  </li>
                  <li className={pathname === "/about-us" ? "active" : ""}>
                    <Link to="/about-us">ABOUT US</Link>
                  </li>
                  <li className={pathname === "/contact-us" ? "active" : ""}>
                    <Link to="/contact-us">CONTACT US</Link>
                  </li>
                </ul>
              </div>
              <Button
                style={{
                  backgroundColor: "transparent",
                  color: "rgb(240, 241, 244)",
                  border: "none",
                  borderRadius: "20px",
                  marginRight: "10px",
                  marginTop: "2px",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "rgb(94, 122, 110)";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
                onClick={() => {
                  var mode = localStorage.getItem("mode");
                  if (mode == null || mode == "light") {
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
                    setColor("#343434");
                    setTextcolor("white");
                    setHeadings("white");
                    setFooterStyle({
                      backgroundColor: "#28282B",
                      marginTop: "60px",
                      color: "white",
                    });
                  }
                  setShowModalLogin(true);
                }}
              >
                LOGIN
              </Button>
              <Button
                style={{
                  backgroundColor: "rgb(126, 192, 47)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "20px",
                  marginRight: "10px",
                  marginTop: "2px",
                }}
                onClick={() => {
                  var mode = localStorage.getItem("mode");
                  if (mode == null || mode == "light") {
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
                    setColor("#343434");
                    setTextcolor("white");
                    setHeadings("white");
                    setFooterStyle({
                      backgroundColor: "#28282B",
                      marginTop: "60px",
                      color: "white",
                    });
                  }
                  setShowModal(true);
                }}
              >
                Register
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="links">
          <ul>
            <li className={pathname === "/" ? "active" : ""}>
              <i
                className="fas fa-home"
                style={{ marginRight: "5px", color: "white" }}
              ></i>{" "}
              <Link to="/">Home</Link>
            </li>
            <li className={pathname === "/booking" ? "active" : ""}>
              <i
                className="fas fa-book"
                style={{ marginRight: "5px", color: "white" }}
              ></i>{" "}
              <Link to="/booking">Booking</Link>
            </li>
            <li className={pathname === "/about-us" ? "active" : ""}>
              <i
                className="fas fa-info-circle"
                style={{ marginRight: "5px", color: "white" }}
              ></i>{" "}
              <Link to="/about-us">About Us</Link>
            </li>
            <li className={pathname === "/contact-us" ? "active" : ""}>
              <i
                className="fas fa-envelope"
                style={{ marginRight: "5px", color: "white" }}
              ></i>{" "}
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      {/*Register Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body style={{ backgroundColor: `${color}` }}>
          <Row>
            <Col md={12}>
              <h3 style={{ color: `${headings}`, fontWeight: "bold" }}>
                Discover Your Perfect Stay
              </h3>
              <p style={{ color: `${headings}` }}>Create Your account</p>
              <Form
                id="registerform"
                action={`https://defiant-scarlet-cougar.glitch.me/register`}
                method="post"
              >
                <MDBRow
                  className="align-items-center"
                  style={{ color: `${textcolor}` }}
                >
                  <MDBCol md="12">
                    <MDBInput
                      id="firstname"
                      name="firstname"
                      hint="First Name"
                    />
                    <span
                      id="firstname-error"
                      style={{ marginTop: "-20px" }}
                    ></span>
                  </MDBCol>
                  <MDBCol md="12">
                    <MDBInput id="lastname" name="lastname" hint="Last Name" />
                    <span
                      id="lastname-error"
                      style={{ marginTop: "-20px" }}
                    ></span>
                  </MDBCol>
                  <MDBCol md="12">
                    <MDBInput id="email" name="email" hint="Email" />
                    <span
                      id="email-error"
                      style={{ marginTop: "-20px" }}
                    ></span>
                  </MDBCol>
                  <MDBCol md="12">
                    <MDBInput
                      type="password"
                      id="spassword"
                      name="password"
                      hint="Password"
                    />
                    <span
                      id="password-error"
                      style={{ marginTop: "-20px" }}
                    ></span>
                  </MDBCol>
                </MDBRow>
                <center>
                  <Button
                    style={{
                      backgroundColor: "rgb(126, 192, 47)",
                      color: "#1A134B",
                      border: "none",
                    }}
                    className="col-12"
                    onClick={handleSignup}
                  >
                    Register
                  </Button>
                  <p style={{ marginTop: "5px", color: `${textcolor}` }}>
                    Already have an account?{" "}
                    <a
                      href="#"
                      style={{ textDecoration: "none", fontWeight: "bold" }}
                      onClick={handlelogin}
                    >
                      Login
                    </a>
                  </p>
                </center>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      {/*Login Modal */}
      <Modal show={showModalLogin} onHide={handleCloseLogin} centered>
        <Modal.Body style={{ backgroundColor: `${color}` }}>
          <Row style={{ height: "100%" }}>
            <Col md={12} style={{ padding: "10px" }}>
              <h3 style={{ color: `${headings}`, fontWeight: "bold" }}>
                Welcome Back 👋
              </h3>
              <p style={{ color: `${headings}` }}>Login to Your account</p>
              <Form
                id="loginform"
                method="post"
                action={`https://bird-cyan-moose.glitch.me/login?token=${random}`}
              >
                <MDBRow className="align-items-center">
                  <MDBCol md="12">
                    <MDBInput id="lemail" name="emails" hint="Email" />
                    <span
                      id="lemail-error"
                      style={{ marginTop: "-20px" }}
                    ></span>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="align-items-center">
                  <MDBCol md="12">
                    <MDBInput
                      type="password"
                      id="lpassword"
                      name="passwords"
                      hint="Password"
                    />
                    <span
                      id="lpassword-error"
                      style={{ marginTop: "-20px" }}
                    ></span>
                  </MDBCol>
                </MDBRow>
                <p style={{ marginTop: "-7px", textAlign: "right" }}>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                    onClick={handleforgot}
                  >
                    Forgot Password?
                  </a>
                </p>
                <center>
                  <Button
                    style={{
                      backgroundColor: "rgb(126, 192, 47)",
                      color: "#1A134B",
                      border: "none",
                    }}
                    className="col-12"
                    onClick={LoginAccount}
                  >
                    Login
                  </Button>
                  <p style={{ marginTop: "5px", color: `${textcolor}` }}>
                    Don't have an account?{" "}
                    <a
                      href="#"
                      onClick={handlesignup}
                      style={{ textDecoration: "none", fontWeight: "bold" }}
                    >
                      Register
                    </a>
                  </p>
                </center>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      {/*Forgot Password Modal */}
      <Modal show={showModalReset} onHide={handleCloseReset} centered>
        <Modal.Body style={{ backgroundColor: `${color}` }}>
          <Row style={{ height: "100%" }}>
            <Col md={12} style={{ padding: "10px" }}>
              <h3 style={{ color: `${headings}`, fontWeight: "bold" }}>
                Reset Your Password
              </h3>
              <p style={{ color: `${headings}` }}>
                Forgot Password? Don't Worry Reset it
              </p>
              <Form
                action="https://defiant-scarlet-cougar.glitch.me/reset"
                id="resetform"
                method="post"
              >
                <MDBRow className="align-items-center">
                  <MDBCol md="12">
                    <MDBInput id="femail" name="emails" hint="Email" required />
                    <span
                      id="resetemail-error"
                      style={{ marginTop: "-20px" }}
                    ></span>
                  </MDBCol>
                </MDBRow>
                <center>
                  <Button
                    type="submit"
                    style={{
                      backgroundColor: "rgb(126, 192, 47)",
                      color: "#1A134B",
                      border: "none",
                    }}
                    className="col-12"
                  >
                    Proceed
                  </Button>
                </center>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      {/*Forgot Password Modal 1 */}
      <Modal show={showModalforgot} onHide={handleCloseforgot} centered>
        <Modal.Body style={{ backgroundColor: `${color}` }}>
          <Row style={{ height: "100%" }}>
            <Col md={12} style={{ padding: "10px" }}>
              <h3 style={{ color: `${headings}`, fontWeight: "bold" }}>
                Reset Your Password
              </h3>
              <p style={{ color: `${headings}` }}>
                Forgot Password? Don't Worry Reset it
              </p>
              <Form
                action={`https://defiant-scarlet-cougar.glitch.me/resetverify?email=${email}&code=${code}`}
                id="forgotform"
                method="post"
              >
                <MDBRow className="align-items-center">
                  <MDBCol md="12">
                    <MDBInput
                      id="code"
                      name="code"
                      hint="Verification Code"
                      type="password"
                      required
                      style={{ marginBottom: "-20px" }}
                    />
                    <span id="rcode-error" style={{ color: "red" }}>
                      {spanerror}
                    </span>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="align-items-center">
                  <MDBCol md="12">
                    <MDBInput
                      id="rpassword"
                      name="rpassword"
                      hint="Password"
                      type="password"
                      required
                    />
                    <span
                      id="rpassword-error"
                      style={{ marginTop: "-20px" }}
                    ></span>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="align-items-center">
                  <MDBCol md="12">
                    <MDBInput
                      id="cpassword"
                      name="cpassword"
                      hint="Confirm Password"
                      type="password"
                      required
                    />
                    <span
                      id="cpassword-error"
                      style={{ marginTop: "-20px" }}
                    ></span>
                  </MDBCol>
                </MDBRow>
                <center>
                  <Button
                    style={{
                      backgroundColor: "rgb(126, 192, 47)",
                      color: "#1A134B",
                      border: "none",
                    }}
                    className="col-12"
                    onClick={handleResetPass}
                  >
                    Reset
                  </Button>
                </center>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      {/*Verification */}
      <Modal show={showverify} centered>
        <Modal.Body style={{ backgroundColor: `${color}` }}>
          <Row style={{ height: "100%" }}>
            <Col md={12} style={{ padding: "10px" }}>
              <h3 style={{ color: `${headings}`, fontWeight: "bold" }}>
                Verify You Email
              </h3>
              <p style={{ color: `${headings}` }}>
                Verify Your email to activate your account
              </p>
              <Form
                action={`https://defiant-scarlet-cougar.glitch.me/verify?email=${email}&code=${code}`}
                id="verifyform"
                method="post"
              >
                <MDBRow className="align-items-center">
                  <MDBCol md="12">
                    <MDBInput
                      id="code"
                      name="code"
                      hint="Verification Code"
                      type="password"
                      style={{ marginBottom: "-10px" }}
                    />
                    <span id="vercode-error" style={{ color: "red" }}>
                      {spanver}
                    </span>
                  </MDBCol>
                </MDBRow>
                <center>
                  <Button
                    style={{
                      backgroundColor: "rgb(126, 192, 47)",
                      color: "#1A134B",
                      border: "none",
                    }}
                    className="col-12"
                    onClick={handleVerification}
                  >
                    Verify
                  </Button>
                </center>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <Modal show={showverified} onHide={handlecloseVerified} centered>
        <Modal.Body style={{ backgroundColor: `${color}` }}>
          <Row style={{ height: "100%" }}>
            <Col md={12} style={{ padding: "10px" }}>
              <h3
                style={{
                  color: `${headings}`,
                  fontWeight: "bold",
                }}
              >
                Email Verified
              </h3>
              <p style={{ color: `${headings}` }}>
                Congratulations! You Email Has been Verified
              </p>
              <center>
                <img src="/Assets/sucess.png" alt="" />
              </center>
              <Button
                style={{
                  backgroundColor: "rgb(126, 192, 47)",
                  color: "#1A134B",
                  border: "none",
                }}
                className="col-12"
                onClick={() => {
                  setShowverified(false);
                }}
              >
                Close
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
