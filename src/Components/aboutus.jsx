import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import LogNavbar from "./lognavbar";

export default function About() {
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
      <div className="abouthead"></div>
      <center>
        <div className="about">
          <div className="left-about">
            <h1>
              <span style={{ color: `${headings}` }}>Welcome to</span> <br />{" "}
              Our Hotel
            </h1>
            <p style={{ color: `${textcolor}` }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              ipsam ut molestias animi, ullam debitis nostrum architecto modi
              cumque illum dignissimos, deserunt commodi accusantium aliquam
              nesciunt laboriosam quibusdam esse natus amet maxime doloremque
              officiis. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Delectus ipsam ut molestias animi, ullam debitis nostrum
              architecto modi cumque illum dignissimos, deserunt commodi
              accusantium aliquam nesciunt laboriosam quibusdam esse natus amet
              maxime doloremque officiis. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Delectus ipsam ut molestias animi,
              ullam debitis nostrum architecto modi cumque illum dignissimos,
              deserunt commodi accusantium aliquam nesciunt laboriosam quibusdam
              esse natus amet maxime doloremque officiis. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Delectus ipsam ut molestias
              animi, ullam debitis nostrum architecto modi cumque illum
              dignissimos, deserunt commodi accusantium aliquam nesciunt
              laboriosam quibusdam esse natus amet maxime doloremque officiis.
            </p>
          </div>
          <div className="right-about">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/8a/e0/b9/bellagio-las-vegas.jpg?w=700&h=-1&s=1"
              alt="about us"
            />
          </div>
        </div>
      </center>
      <Footer style={footerStyle} />
    </div>
  );
}
