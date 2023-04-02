import React from "react";
import Header from "./navbar";
import Footer from "./footer";

export default function FeatureContent() {
  return (
    <>
      <div
        className="head"
        style={{ backgroundColor: "#2f4a75", height: "auto" }}
      >
        <div className="right">
          <h1
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: "35px",
              paddingTop: "40px",
              textAlign: "center",
            }}
          >
            Features
          </h1>
          <p
            style={{
              color: "white",
              fontSize: "18px",
              paddingLeft: "10px",
              paddingRight: "10px",
              textAlign: "center",
              paddingBottom: "40px",
            }}
          >
            Our comprehensive study tools provide you the best chance of success
            on your upcoming NREMT. Try them all now.
          </p>
        </div>
      </div>

      <div class="column-row">
        <center>
          <div class="col-column">
            <h1 style={{ fontWeight: "bold", fontSize: "30px" }}>
              NREMT Practice Tests
            </h1>
            <h1 style={{ paddingLeft: "30px", paddingRight: "30px" }}>
              Our questions go through a multi-stage review process that ensures
              the highest level of accuracy. New! Technology Enhanced Item (TEI)
              Questions Included! Try one now.
            </h1>
            <a href="/free-practice-quiz">
              <button
                class="text-white font-bold py-2 px-4 rounded signup"
                style={{
                  marginTop: "24px",
                  backgroundColor: "#ec6761",
                  marginRight: "40px",
                }}
              >
                Try a Free Practice Test
              </button>
            </a>
          </div>
          <div class="col-column">
            <img
              src="/assets/quizpic.png"
              alt=""
              className="imgquizes"
              style={{
                height: "400px",
                width: "500px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            />
          </div>
        </center>
      </div>

      <div class="column-row">
        <center>
          <div class="col-column">
            <img
              src="/assets/quizpic1.png"
              alt=""
              className="imgquizes"
              style={{
                height: "400px",
                width: "500px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            />
          </div>
          <div class="col-column">
            <h1 style={{ fontWeight: "bold", fontSize: "30px" }}>
              NREMT Flashcards
            </h1>
            <h1 style={{ paddingLeft: "30px", paddingRight: "30px" }}>
              Flashcards give you another way to build critical long-term memory
              and maximize test-taking abilities. Try a stack now.
            </h1>
            <a href="">
              <button
                class="text-white font-bold py-2 px-4 rounded signup"
                style={{
                  marginTop: "24px",
                  backgroundColor: "#ec6761",
                  marginRight: "40px",
                }}
              >
                Study NREMT FlashCard
              </button>
            </a>
          </div>
        </center>
      </div>

      <div class="column-row">
        <center>
          <div class="col-column">
            <h1 style={{ fontWeight: "bold", fontSize: "30px" }}>
              Comprehensive Video Library
            </h1>
            <h1 style={{ paddingLeft: "30px", paddingRight: "30px" }}>
              Over 400 videos and animations covering lectures, mini-lessons,
              practical skills, and concepts you need to know for test day.
              Watch a video now.
            </h1>
            <a href="">
              <button
                class="text-white font-bold py-2 px-4 rounded signup"
                style={{
                  marginTop: "24px",
                  backgroundColor: "#ec6761",
                  marginRight: "40px",
                }}
              >
                Watch Vedio Free
              </button>
            </a>
          </div>
          <div class="col-column">
            <img
              src="/assets/vediopic.png"
              alt=""
              className="imgquizes"
              style={{
                height: "400px",
                width: "500px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            />
          </div>
        </center>
      </div>

      <div class="column-row">
        <center>
          <div class="col-column">
            <h1 style={{ fontWeight: "bold", fontSize: "30px" }}>Worksheets</h1>
            <h1 style={{ paddingLeft: "50px", paddingRight: "50px" }}>
              Worksheets challenge you like an in-class assignment, deepening
              your knowledge and helping connect concepts.
            </h1>
            <div style={{ fontWeight: "bold" }}>
              <a href="" style={{ color: "#304b76" }}>
                Try a Work Sheet
              </a>
            </div>
          </div>
          <div class="col-column">
            <h1 style={{ fontWeight: "bold", fontSize: "30px" }}>
              Study Guides
            </h1>
            <h1 style={{ paddingLeft: "50px", paddingRight: "50px" }}>
              Get an overview of all the topics covered on the NREMT exam.
              Perfect for offline or on-the-go study.
            </h1>
            <div style={{ fontWeight: "bold" }}>
              <a href="" style={{ color: "#304b76" }}>
                Try a Study Guide
              </a>
            </div>
          </div>
        </center>
      </div>
      <div style={{ marginTop: "100px" }}>
        <hr />
      </div>
    </>
  );
}
