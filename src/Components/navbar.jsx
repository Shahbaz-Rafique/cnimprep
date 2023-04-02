import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav
        className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
        style={{ backgroundColor: "#223345" }}
      >
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <NavLink
            to=""
            className="flex items-center"
            style={{ marginLeft: "15px" }}
          >
            <img
              src="/assets/emtlogo.png"
              alt="NREMT Logo"
              style={{ width: "34px", height: "34px" }}
            />
            <span
              className="self-center text-xl font-semibold whitespace-nowrap:text-white"
              style={{ color: "white", fontSize: "27px" }}
            >
              CNIM<span style={{ color: "gray" }}>prep</span>
            </span>
          </NavLink>
          <div
            className="flex md:order-2"
            style={{ backgroundColor: "#223345" }}
          >
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              style={{ color: "#fff" }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul
              className="flex flex-col p-4 mt-4 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md: dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
              style={{ backgroundColor: "#223345" }}
            >
              <li>
                <Link
                  to="/features"
                  lassName="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                  style={{
                    textDecoration: "none",
                    marginRight: "8px",
                    color: "#fff",
                  }}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  lassName="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                  style={{
                    textDecoration: "none",
                    marginRight: "8px",
                    color: "#fff",
                  }}
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  lassName="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                  style={{
                    textDecoration: "none",
                    marginRight: "8px",
                    color: "#fff",
                  }}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  lassName="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                  style={{
                    textDecoration: "none",
                    marginRight: "8px",
                    color: "#fff",
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  lassName="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                  style={{
                    textDecoration: "none",
                    marginRight: "8px",
                    color: "#fff",
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
