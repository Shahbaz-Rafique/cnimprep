import React from "react";
import "../App.css";
import Footer from "./footer";
import Header from "./navbar";

export default function Contact() {
  return (
    <>
      <Header />
      <div
        style={{
          marginTop: "55px",
          backgroundColor: "#374f7b",
          height: "Auto",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: "35px",
            paddingBottom: "30px",
          }}
        >
          Contact
        </h1>
      </div>
      <div
        className="container1"
        style={{
          textAlign: "center",
          marginTop: "-50px",
          marginLeft: "-25px",
        }}
      >
        <div className="left-column1">
          <div
            className="max-w-sm"
            style={{
              paddingLeft: "30px",
              paddingRight: "30px",
              paddingTop: "30px",
              marginTop: "10px",
              borderRadius: "10px",
              float: "right",
              textAlign: "justify",
            }}
          >
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>
              Current and prospective Students
            </h1>
          </div>
        </div>

        <div className="left-column1">
          <div
            className="max-w-sm"
            style={{
              paddingLeft: "30px",
              paddingRight: "30px",
              paddingBottom: "30px",
              marginTop: "-20px",
              borderRadius: "10px",
              marginBottom: "10px",
              float: "left",
              textAlign: "justify",
            }}
          >
            <h1 style={{ fontSize: "18px", color: "#90857d" }}>
              Many common questions can be answered by taking a look at our
            </h1>
            <a
              href=""
              style={{ fontSize: "18px", color: "#1f9ae8", fontWeight: "bold" }}
            >
              Frequently Asked Questions
            </a>
            <br />
            <br />
            <h1 style={{ fontSize: "18px", color: "#90857d" }}>
              Many common questions can be answered by taking a look at
              ourQuestions or Comments? We’d love to hear from you, and we’re
              committed to responding to all inquiries within 24 hours.
            </h1>
            <a
              href=""
              style={{ fontSize: "18px", color: "#1f9ae8", fontWeight: "bold" }}
            >
              info@cnimprep.com
            </a>
            <br />
            <br />
            <h1 style={{ fontSize: "18px", color: "#90857d" }}>
              Find out how you can bring EMTprep to you classroom. Contact us
              for questions about bulk memberships or pricing. Help your
              students get test-ready with our complete test preparation
              toolset.
            </h1>
            <a
              href=""
              style={{ fontSize: "18px", color: "#1f9ae8", fontWeight: "bold" }}
            >
              sales@cnimprep.com
            </a>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <Footer />
    </>
  );
}
