import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import LogNavbar from "./lognavbar";

export default function Imprint() {
  const [color, setColor] = useState("#f5f5f5");
  const [textcolor, setTextcolor] = useState("black");
  const [headings, setHeadings] = useState("");
  const [paddingM, setPaddingM] = useState("15px");
  const [paddingR, setPaddingR] = useState("30px");
  const [fontM, setFontM] = useState("25px");
  const [theme, setTheme] = useState(false);
  const [footerStyle, setFooterStyle] = useState({
    backgroundColor: "",
    marginTop: "60px",
  });

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
      <div className="imprinthead"></div>
      <center>
        <div
          className="impressum"
          style={{ textAlign: "left", marginTop: "20px" }}
        >
          <h4 style={{ fontWeight: "bold", color: `${headings}` }}>
            BURG BRÄUSTÜBL
          </h4>
          <h5
            style={{
              fontWeight: "bold",
              color: `${headings}`,
              marginTop: "20px",
            }}
          >
            Address
          </h5>
          <span style={{ color: `${textcolor}` }}>Germany</span>
          <br />
          <span style={{ color: `${textcolor}` }}>+40 237 3473 332</span>
          <h5
            style={{
              fontWeight: "bold",
              color: `${headings}`,
              marginTop: "20px",
            }}
          >
            Registration
          </h5>
          <span style={{ color: `${textcolor}` }}>Germany</span>
          <br />
          <span style={{ color: `${textcolor}` }}>+40 237 3473 332</span>
          <h5
            style={{
              fontWeight: "bold",
              color: `${headings}`,
              marginTop: "20px",
            }}
          >
            Contact
          </h5>
          <span style={{ color: `${textcolor}` }}>Germany</span>
          <br />
          <span style={{ color: `${textcolor}` }}>+40 237 3473 332</span>
          <br />
          <span style={{ color: `${textcolor}` }}>
            hotel.burgbraustubl@gmail.com
          </span>
        </div>
      </center>
      <Footer style={footerStyle} />
    </div>
  );
}
