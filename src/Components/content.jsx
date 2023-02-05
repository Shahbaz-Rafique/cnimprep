import React, { Fragment, useEffect, useState } from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import Footer from "./footer";

const breakPoints = [
  { width: 1, itemToShow: 1 },
  { width: 550, itemToShow: 2 },
  { width: 768, itemToShow: 3 },
  { width: 1200, itemToShow: 4 },
];

const Content = () => {
  const [items, setItems] = useState(4);
  useEffect(() => {
    if (window.innerWidth > 1000) {
      setItems(4);
    } else if (window.innerWidth > 700 && window.innerWidth < 1000) {
      setItems(3);
    } else if (window.innerWidth > 500 && window.innerWidth < 700) {
      setItems(2);
    } else if (window.innerWidth < 500) {
      setItems(1);
    }
  });
  function handleResize() {
    if (window.innerWidth > 1000) {
      setItems(4);
    } else if (window.innerWidth > 700 && window.innerWidth < 1000) {
      setItems(3);
    } else if (window.innerWidth > 500 && window.innerWidth < 700) {
      setItems(2);
    } else if (window.innerWidth < 500) {
      setItems(1);
    }
  }
  window.addEventListener("resize", handleResize);
  return (
    <>
      {/* HomePage First Two Columns */}
      <div
        className="container1"
        style={{ marginTop: "60px", background: "url(/assets/graph.jpg)" }}
      >
        <div className="left-column1">
          <h1 className="Title" style={{ color: "#0e225a" }}>
            Pass the NREMT
          </h1>
          <h1
            className="Title"
            style={{ color: "#0e225a", marginTop: "-15px" }}
          >
            for the First Time
          </h1>
          <h1
            className="joinover"
            style={{ color: "#0e225a", width: "87%", fontSize: "17px" }}
          >
            Join over 200,000 students who have passed the NREMT exam with
            EMTprep. Pass the first time. Guaranteed.
          </h1>
          <div>
            <a href="/signup">
              <button
                class="text-white font-bold py-2 px-4 rounded signup"
                style={{ marginTop: "24px", backgroundColor: "#ec6761" }}
              >
                Sign Up Now
              </button>
            </a>
            <button
              class="text-black font-bold py-2 px-4 rounded"
              style={{
                marginTop: "24px",
                backgroundColor: "#fff",
                fontSize: "18px",
              }}
            >
              Take a Free Practice Test
            </button>
          </div>
        </div>
        <div className="right-column" style={{ marginRight: "60px" }}>
          <img src="/assets/pic.png" alt="" className="pic" />
        </div>
      </div>

      <hr />
      {/* HomePage Middle Two Columns */}
      <div className="container1">
        <div className="left-column">
          <h1
            className="smarttitle"
            style={{
              color: "#0e225a",
              fontSize: "30px",
              marginTop: "-50px",
              fontWeight: "bold",
              fontFamily: "Trebuchet MS",
            }}
          >
            Smarter Study Tools
          </h1>
          <h1
            className="textcon"
            style={{ textAlign: "justify", fontSize: "20px" }}
          >
            EMTprep’s study tools take you beyond test questions.
            Memory-building flashcards, study guides, interactive worksheets,
            and videos reinforce knowledge and fill in the gaps to give you the
            confidence you need on test day.
          </h1>
          <h1
            style={{
              fontWeight: "bold",
              marginTop: "18px",
              marginBottom: "18px",
              fontSize: "20px",
              color: "#0e225a",
            }}
            className="smarttitle"
          >
            Better questions mean better preparation
          </h1>
          <h1
            className="textcon"
            style={{ textAlign: "justify", fontSize: "20px" }}
          >
            Our questions go through multiple review stages so you get the most
            up-to-date questions available. Answer rationales get the same
            rigorous treatment so you get the thought process behind the best
            answer.{" "}
            <a href="" style={{ fontWeight: "bold", color: "#396392" }}>
              Learn More
            </a>
          </h1>
          <h1
            style={{
              color: "#ec6762",
              fontSize: "30px",
              marginTop: "40px",
              marginBottom: "15px",
              fontWeight: "bold",
              fontFamily: "Trebuchet MS",
            }}
            className="smarttitle"
          >
            Live Events
          </h1>
          <h1
            className="textcon"
            style={{ textAlign: "justify", fontSize: "20px" }}
          >
            30-minute review lectures, Q&A sessions with EMT and Paramedic
            instructors, NREMT strategy, interviews with our Medical Director
            and other EMS professionals, and much more. All included with your
            monthly/yearly subscription.
          </h1>
          <center>
            <button
              class="text-white font-bold py-2 px-4 rounded"
              style={{
                marginTop: "30px",
                backgroundColor: "#ec6761",
                marginTop: "30px",
              }}
            >
              Try Our Study Tools
            </button>
          </center>
        </div>
        <div
          className="right-column"
          style={{ marginRight: "60px", marginTop: "30px" }}
        >
          <img
            src="/assets/pic1.png"
            alt=""
            className="imgbottom"
            style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
          />
          <br />
          <img
            src="/assets/pic2.png"
            alt=""
            className="imgbottom"
            style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
          />
        </div>
      </div>

      <hr />
      <center>
        <h1
          style={{
            fontWeight: "bold",
            color: "#223345",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          WE ALSO OFFER
        </h1>
        <div style={{ display: "inline-block" }}></div>
      </center>
      <div style={{ backgroundColor: "#f7f8fa", height: "auto" }}>
        <div style={{ paddingTop: "100px", paddingBottom: "100px" }}>
          <h1
            className="EGurantee"
            style={{
              fontSize: "35px",
              fontWeight: "bold",
              textAlign: "center",
              color: "#062160",
            }}
          >
            Pass you Exam. Guaranted
          </h1>
          <center>
            <p
              className="gurantedtext"
              style={{
                textAlign: "center",
                fontSize: "20px",
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              Every single EMTprep student is covered by our 100% Pass
              Guarantee. If you don’t pass the first time we will continue to
              support you until you do. Period.{" "}
            </p>
            <a href="" style={{ fontWeight: "bold", color: "#062160" }}>
              Learn More
            </a>
          </center>
        </div>
      </div>
      <br />
      <br />
      <Fragment>
        <div className="slides">
          <Carousel
            breakPoints={breakPoints}
            itemsToShow={items}
            renderBottomCenterControls={false}
          >
            <div
              class="max-w-sm overflow-hidden shadow-lg"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                width: "300px",
              }}
            >
              <div class="px-6 py-4" style={{ backgroundColor: "#a64b48" }}>
                <div
                  class="font-bold text-xl mb-2"
                  style={{ textAlign: "center", color: "white" }}
                >
                  Test Tips & Strategies
                </div>
              </div>
              <div style={{ padding: "15px" }}>
                <h1 style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Top 5 Most Essential NREMT Test Day Tips
                </h1>
                <h1 style={{ fontSize: "14px" }}>
                  EMTprep Staff <span>Updated 06/01/2022</span>
                </h1>
                <p
                  class="text-gray-700 text-base"
                  style={{ textAlign: "justify" }}
                >
                  Top 5 Most Essential NREMT Test Day Tips We're Not Presenting
                  Rocket Science Here Let's be honest, you're probably…
                </p>
                <h1
                  style={{
                    marginTop: "10px",
                    color: "#0f68af",
                    fontWeight: "bold",
                  }}
                >
                  <a href="">Read More</a>
                </h1>
              </div>
            </div>

            <div
              class="max-w-sm overflow-hidden shadow-lg"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                width: "300px",
              }}
            >
              <div class="px-6 py-4" style={{ backgroundColor: "#475983" }}>
                <div
                  class="font-bold text-xl mb-2"
                  style={{ textAlign: "center", color: "white" }}
                >
                  Cardiology and Resuscita..
                </div>
              </div>
              <div style={{ padding: "15px" }}>
                <h1 style={{ fontSize: "17px", fontWeight: "bold" }}>
                  12-Lead ECG Review
                </h1>
                <h1 style={{ fontSize: "14px" }}>
                  EMTprep Staff <span>Updated 06/01/2022</span>
                </h1>
                <p
                  class="text-gray-700 text-base"
                  style={{ textAlign: "justify" }}
                >
                  Patient History: 87-year-old male with a chief complaint of
                  AMS and weakness. Family on scene state that the patient has a
                  hist…
                </p>
                <h1
                  style={{
                    marginTop: "10px",
                    color: "#0f68af",
                    fontWeight: "bold",
                  }}
                >
                  <a href="">Read More</a>
                </h1>
              </div>
            </div>

            <div
              class="max-w-sm overflow-hidden shadow-lg"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                width: "300px",
              }}
            >
              <div class="px-6 py-4" style={{ backgroundColor: "#b35555" }}>
                <div
                  class="font-bold text-xl mb-2"
                  style={{ textAlign: "center", color: "white" }}
                >
                  Cardiology and Resusci…
                </div>
              </div>
              <div style={{ padding: "15px" }}>
                <h1 style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Rhythm Strip Review
                </h1>
                <h1 style={{ fontSize: "14px" }}>
                  EMTprep Staff <span>Updated 06/01/2022</span>
                </h1>
                <p
                  class="text-gray-700 text-base"
                  style={{ textAlign: "justify" }}
                >
                  The paced rhythm is often simultaneously easy and complicated.
                  You put on your 4-lead cables and take a look at t…
                </p>
                <h1
                  style={{
                    marginTop: "10px",
                    color: "#0f68af",
                    fontWeight: "bold",
                  }}
                >
                  <a href="">Read More</a>
                </h1>
              </div>
            </div>

            <div
              class="max-w-sm overflow-hidden shadow-lg"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                width: "300px",
              }}
            >
              <div class="px-6 py-4" style={{ backgroundColor: "#c5853b" }}>
                <div
                  class="font-bold text-xl mb-2"
                  style={{ textAlign: "center", color: "white" }}
                >
                  Test Tips and Strategies
                </div>
              </div>
              <div style={{ padding: "15px" }}>
                <h1 style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Brandon’s NREMT Success Story
                </h1>
                <h1 style={{ fontSize: "14px" }}>
                  EMTprep Staff <span>Updated 06/01/2022</span>
                </h1>
                <p
                  class="text-gray-700 text-base"
                  style={{ textAlign: "justify" }}
                >
                  I started to get into the world of EMS after having very close
                  friends who are employed at various Fire Departments aroun…
                </p>
                <h1
                  style={{
                    marginTop: "10px",
                    color: "#0f68af",
                    fontWeight: "bold",
                  }}
                >
                  <a href="">Read More</a>
                </h1>
              </div>
            </div>
          </Carousel>
        </div>
      </Fragment>

      <div
        className="container1"
        style={{
          backgroundColor: "#3a527e",
          height: "auto",
          marginTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <div className="left-column">
          <h1
            style={{
              marginLeft: "40px",
              color: "white",
              fontWeight: "bold",
              fontSize: "40px",
            }}
          >
            Ready to Get Started?
          </h1>
          <h1
            style={{
              marginTop: "20px",
              marginLeft: "40px",
              color: "white",
              fontSize: "17px",
            }}
          >
            Sign up and get started right now. Study the right way to make your
            EMT career a reality.
          </h1>
          <center>
            <button
              className="text-white font-bold py-2 px-4 rounded signup"
              style={{
                marginTop: "40px",
                backgroundColor: "#ec6761",
                marginLeft: "-15px",
              }}
              to="/signup"
            >
              Sign Up
            </button>
          </center>
        </div>
        <div className="right-column">
          <h1
            style={{
              marginTop: "80px",
              textAlign: "justify",
              color: "white",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
          >
            Our plans include instant and unlimited access to our entire suite
            of tools to maximize your study time and confidence.
          </h1>
          <h1
            style={{
              textAlign: "justify",
              color: "white",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
          >
            Your success is guaranteed with our 100% Pass Guarantee. We’re here
            to see you succeed.
          </h1>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};
export default Content;
