import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css";
import Footer from "./footer";
import Header from "./navbar";
import Head from "./head";

export default function Quiz() {
  const dates = new Date();
  return (
    <>
      <Head />
      <div
        style={{
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
          Free CNIM Practice Test
        </h1>
      </div>
      <div className="quiz-container">
        <div className="quiz-left-column">
          <img
            src="/assets/practicetestpic.png"
            alt=""
            style={{ marginTop: "35px" }}
          />
        </div>
        <div className="quiz-right-column">
          <h1
            style={{
              padding: "20px",
              marginTop: "20px",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Our questions go through a multi-stage review process that ensures
            the highest level of accuracy. New! Technology Enhanced Item (TEI)
            Questions Included! Try one now.
          </h1>
          <br />
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Choose an exam level
          </h1>
          <div className="center" style={{ textAlign: "center" }}>
            <button
              className="myButton"
              onClick={() => {
                window.open(`/start-quiz?quiz=${"EMR Quiz"}`);
              }}
            >
              EMR Quiz
            </button>
            <button className="myButton">EMT Quiz</button>
            <button className="myButton">AEMT Quiz</button>
            <button className="myButton">Paramedic Quiz</button>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <Footer />
    </>
  );
}
