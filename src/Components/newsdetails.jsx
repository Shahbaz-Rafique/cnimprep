import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import LogNavbar from "./lognavbar";

export default function Newdetails() {
  const [color, setColor] = useState("#f5f5f5");
  const [textcolor, setTextcolor] = useState("black");
  const [headings, setHeadings] = useState("");
  const [paddingM, setPaddingM] = useState("15px");
  const [paddingR, setPaddingR] = useState("30px");
  const [fontM, setFontM] = useState("25px");
  const [theme, setTheme] = useState(false);
  const [news, setNews] = useState([]);
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

  function convertToGermanDateTimeFormat(datetime) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };

    const germanDateTime = datetime.toLocaleString("de-DE", options);
    return germanDateTime;
  }

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

    async function fetchData() {
      try {
        const queryParameters = new URLSearchParams(window.location.search);
        const id = queryParameters.get("id");
        const responses = await fetch(
          "https://defiant-scarlet-cougar.glitch.me/getnews"
        );
        const datas = await responses.json();
        setNews(datas.filter((item) => item.Id == id));
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
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
      <div className="newshead"></div>
      <center>
        {news.map((data, index) => (
          <div className="about">
            <div className="left-about">
              <h1>
                <span style={{ color: `${headings}` }}>{data.title}</span>{" "}
                <br />{" "}
              </h1>
              <p style={{ color: `${textcolor}` }}>{data.details}</p>
              <br />
              <p style={{ color: `${textcolor}` }}>
                <b>Published:</b>{" "}
                {convertToGermanDateTimeFormat(new Date(data.dated))}
              </p>
            </div>
            <div className="right-about">
              <img
                src={`https://defiant-scarlet-cougar.glitch.me/uploads/${data.Image}`}
                alt={data.title}
              />
            </div>
          </div>
        ))}
      </center>
      <Footer style={footerStyle} />
    </div>
  );
}
