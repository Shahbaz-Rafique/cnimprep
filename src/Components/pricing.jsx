import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "../App.css";
import Footer from "./footer";
import Header from "./navbar";

export default function Pricing() {
  const dates = new Date();
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
          Prining
        </h1>
      </div>
      <div className="plan">
        <h1
          style={{
            textAlign: "center",
            fontWeight: "600",
            fontSize: "20px",
            marginTop: "20px",
          }}
        >
          1. Choose Your Plan
        </h1>
        <h1 style={{ textAlign: "center", padding: "10px" }}>
          Do you have an Activation Code?{" "}
          <a href="" style={{ color: "#374f7b", textDecoration: "underline" }}>
            Redeem Code
          </a>
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
          <center>
            <div
              className="max-w-sm"
              style={{
                boxShadow:
                  "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
                padding: "30px",
                marginTop: "10px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            >
              <Card>
                <h1
                  style={{
                    color: "black",
                    fontSize: "25px",
                    marginBottom: "15px",
                  }}
                >
                  $39
                </h1>
                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                  PER MONTH
                </h5>
                <ul role="list" className="my-7 space-y-5">
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      Unlimited access to all study materials
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      Thousands of questions & flashcards
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      Regularly updated content
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      Excellent customer support
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      100% Pass Guarantee
                    </span>
                  </li>
                </ul>
                <div className="date" style={{ marginTop: "10px" }}>
                  <hr />
                  <h1 style={{ padding: "10px" }}>
                    Access Renewed: {dates.getDate()}/{dates.getMonth() + 2}/
                    {dates.getFullYear()}
                  </h1>
                  <hr />
                </div>
                <button
                  style={{ marginBottom: "20px", marginTop: "20px" }}
                  type="button"
                  className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
                >
                  Choose plan
                </button>
              </Card>
            </div>
          </center>
        </div>

        <div className="left-column1">
          <center>
            <div
              className="max-w-sm"
              style={{
                boxShadow:
                  "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
                padding: "30px",
                marginTop: "10px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            >
              <Card>
                <h1
                  style={{
                    color: "black",
                    fontSize: "25px",
                    marginBottom: "15px",
                  }}
                >
                  $299
                </h1>
                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                  PER YEAR
                </h5>
                <ul role="list" className="my-7 space-y-5">
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-bold leading-tight text-gray-500 dark:text-gray-400">
                      36% off the monthly price
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-bold leading-tight text-gray-500 dark:text-gray-400">
                      Ideal for EMT/Paramedic school
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      Content updated to the 2022 standards
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      24/7 access to all of our content
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      100% pass guarantee
                    </span>
                  </li>
                </ul>
                <div className="date" style={{ marginTop: "10px" }}>
                  <hr />
                  <h1 style={{ padding: "10px" }}>
                    Access Renewed: {dates.getDate()}/{dates.getMonth() + 2}/
                    {dates.getFullYear()}
                  </h1>
                  <hr />
                </div>
                <button
                  style={{ marginBottom: "20px", marginTop: "20px" }}
                  type="button"
                  className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
                >
                  Choose plan
                </button>
              </Card>
            </div>
          </center>
        </div>
      </div>
      <br />
      <hr />
      <Footer />
    </>
  );
}
