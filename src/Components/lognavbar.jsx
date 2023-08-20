import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import {
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "mdbreact";

export default function LogNavbar() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    document.body.style.overlowX = "hidden";

    async function fetchData() {
      try {
        const response = await fetch(
          "https://defiant-scarlet-cougar.glitch.me/getusersname"
        );
        const data = await response.json();
        for (let i = 0; i < data.length; i++) {
          if (data[i].uniqueid == localStorage.getItem("burg-sesh")) {
            setEmail(data[i].email);
            setName(data[i].firstname);
            break;
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("burg-sesh");
    localStorage.removeItem("burg-id");
    window.location.href = "/";
  };
  const { pathname } = useLocation();
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
                  {localStorage.getItem("aid_sesh") == "true" ? (
                    <li>
                      <a href={process.env.REACT_APP_LINK}>ADMIN</a>
                    </li>
                  ) : null}
                </ul>
              </div>
            </Nav>
            <NavbarNav
              className="ms-auto"
              style={{ textAlign: "center", marginRight: "15px" }}
            >
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret style={{ color: "white" }}>
                    My Account
                  </DropdownToggle>
                  <DropdownMenu>
                    {localStorage.getItem("aid_sesh") == "false" ? (
                      <DropdownItem>{name}</DropdownItem>
                    ) : null}
                    <DropdownItem link onClick={handleLogout}>
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
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
            {localStorage.getItem("aid_sesh") == "true" ? (
              <li>
                <i
                  className="fas fa-home"
                  style={{ marginRight: "5px", color: "white" }}
                ></i>{" "}
                <a href={process.env.REACT_APP_LINK}>ADMIN</a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </>
  );
}
