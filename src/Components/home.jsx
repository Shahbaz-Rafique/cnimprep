import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselItem,
  MDBIcon,
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import Carousel from "better-react-carousel";
import Footer from "./footer";
import Typewriter from "typewriter-effect";
import LogNavbar from "./lognavbar";
import Alert from "react-bootstrap/Alert";

export default function Home() {
  const [color, setColor] = useState("#f5f5f5");
  const [cardscolor, setCardsColor] = useState("white");
  const [textcolor, setTextcolor] = useState("black");
  const [headings, setHeadings] = useState("");
  const [theme, setTheme] = useState(false);
  const [paddingM, setPaddingM] = useState("15px");
  const [paddingR, setPaddingR] = useState("30px");
  const [fontM, setFontM] = useState("25px");
  const [error, setError] = useState("");
  const [ecolor, setEColor] = useState("success");
  const [login, setLogin] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [news, setNews] = useState([]);
  const [back, setBack] = useState([]);
  const [all, setAll] = useState([]);

  const handleAlertToggle = () => {
    setIsAlertVisible(!isAlertVisible);
  };

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
      setCardsColor("white");
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
      setCardsColor("#28282B");
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
    const queryParameters = new URLSearchParams(window.location.search);
    const token = queryParameters.get("token");
    const aid = queryParameters.get("aid");
    async function fetchData() {
      try {
        const response = await fetch(
          "https://bird-cyan-moose.glitch.me/gettokens"
        );
        const data = await response.json();
        const responses = await fetch(
          "https://bird-cyan-moose.glitch.me/getnews"
        );
        const datas = await responses.json();
        setNews(datas.slice(-1));
        setBack(datas.slice(-6));
        setAll(datas);
        if (token != null) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].uniqueid == token) {
              setLogin(true);
              localStorage.setItem("burg-sesh", token);
              localStorage.setItem("burg-id", "true");
              break;
            }
          }
        }
        if (aid != null && aid == process.env.REACT_APP_SHOW) {
          localStorage.setItem("aid_sesh", "true");
        }
        if (token == null) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].uniqueid == localStorage.getItem("burg-sesh")) {
              setLogin(true);
              localStorage.setItem("burg-id", "true");
              break;
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
    const log = queryParameters.get("login");
    const reset = queryParameters.get("reset");
    const action = queryParameters.get("action");
    const logverification = queryParameters.get("logverification");
    if (log == "false") {
      setIsAlertVisible(true);
      setError("Incorrect Credentials");
    }
    if (reset == "true") {
      setIsAlertVisible(true);
      setError("Password has been reset");
    }
    if (logverification == "false") {
      setIsAlertVisible(true);
      setError("Your Account has not been verified");
    }
    if (action == "verify") {
      setIsAlertVisible(true);
      setError("Verify Your Email");
    }
  }, []);

  const handleMode = () => {
    setTheme(!theme);
    if (!theme == true) {
      localStorage.setItem("mode", "dark");
      setColor("#343434");
      setTextcolor("white");
      setCardsColor("#28282B");
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
      setCardsColor("white");
      setHeadings("rgb(29, 55, 104)");
      setFooterStyle({
        backgroundColor: "rgb(248, 249, 250)",
        marginTop: "60px",
        color: "rgb(108, 117, 125)",
      });
    }
  };

  const handleClose = (event) => {
    document.getElementById("error").style.display = "none";
  };

  return (
    <div style={{ backgroundColor: `${color}` }}>
      {localStorage.getItem("burg-id") == "true" ? <LogNavbar /> : <Navbar />}
      <div
        className="mode"
        id="MODE"
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
      <MDBCarousel showControls showIndicators dark fade>
        <MDBCarouselItem
          className="headcarousel w-100 d-block"
          itemId={1}
          src="https://mdbootstrap.com/img/new/standard/city/044.webp"
          alt="..."
        >
          <h3
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "40px",
              marginTop: "-20%",
            }}
          >
            Welcome to Our Hotel
          </h3>
        </MDBCarouselItem>
        <MDBCarouselItem
          className="headcarousel w-100 d-block"
          itemId={2}
          src="https://mdbootstrap.com/img/new/standard/city/044.webp"
          alt="..."
        >
          <h3
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "40px",
              marginTop: "-20%",
            }}
          >
            Welcome to Our Hotel
          </h3>
        </MDBCarouselItem>

        <MDBCarouselItem
          className="headcarousel w-100 d-block"
          itemId={3}
          src="https://mdbootstrap.com/img/new/standard/city/042.webp"
          alt="..."
        >
          <h3
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "40px",
              marginTop: "-20%",
            }}
          >
            Welcome to Our Hotel
          </h3>
        </MDBCarouselItem>
      </MDBCarousel>
      <Alert
        variant={ecolor}
        style={{ display: "none", textAlign: "center", marginTop: "10px" }}
        id="error"
      >
        {error}{" "}
        <a onClick={handleClose} style={{ color: "blue" }}>
          close
        </a>
      </Alert>
      <div className="content">
        <center>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "30px",
              color: "#DAA520",
              marginTop: "30px",
              marginBottom: "10px",
            }}
          >
            <Typewriter
              options={{
                strings: ["Welcome to BURG BRÄUSTÜBL", "Your Number 1 Hotel"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </center>
      </div>

      <center>
        <div className="news">
          <h3 style={{ color: `${headings}` }}>Featured News</h3>
          {news.map((data, index) => (
            <div>
              <Carousel>
                <Carousel.Item>
                  <img
                    src={`https://bird-cyan-moose.glitch.me/uploads/${data.Image}`}
                    className="carouselimg"
                    width="100%"
                    style={{ borderRadius: "6px 6px 0px 0px" }}
                  />
                </Carousel.Item>
              </Carousel>
              <MDBCard
                className="carouselcard"
                style={{
                  backgroundColor: `${cardscolor}`,
                  color: `${textcolor}`,
                  borderRadius: "6px",
                }}
              >
                <h4 style={{ fontWeight: "bold" }}>{data.title}</h4>
                <MDBCardBody>
                  <span style={{ textAlign: "justify" }}>
                    {data.details.substring(0, 300)}...
                  </span>
                  <br />
                  <a
                    href={`/news-details?id=${data.Id}`}
                    style={{
                      textDecoration: "none",
                      color: "rgb(71, 169, 68)",
                    }}
                  >
                    Show More
                  </a>
                </MDBCardBody>
              </MDBCard>
            </div>
          ))}
        </div>
      </center>

      <center>
        <div className="more-news">
          <h3 style={{ color: `${headings}` }}>Even More News</h3>
          <MDBRow className="row-cols-1 row-cols-md-3 g-4">
            {back.map((data, index) => (
              <MDBCol>
                <MDBCard
                  className="h-100"
                  style={{
                    backgroundColor: `${cardscolor}`,
                    color: `${textcolor}`,
                  }}
                >
                  <MDBCardImage
                    src={`https://bird-cyan-moose.glitch.me/uploads/${data.Image}`}
                    alt={data.title}
                    position="top"
                  />
                  <MDBCardBody>
                    <MDBCardTitle style={{ fontWeight: "bold" }}>
                      {data.title}
                    </MDBCardTitle>
                    <MDBCardText>
                      {data.details.substring(0, 200)}...
                      <br />
                      <a
                        href={`/news-details?id=${data.Id}`}
                        style={{
                          textDecoration: "none",
                          color: "rgb(71, 169, 68)",
                        }}
                      >
                        Show More
                      </a>
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter>
                    <small style={{ color: `${textcolor}` }}>
                      {convertToGermanDateTimeFormat(new Date(data.dated))}
                    </small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </div>
        {all.length > 6 ? (
          <Button
            style={{
              backgroundColor: "rgb(126, 192, 47)",
              color: "#fff",
              border: "none",
              borderRadius: "20px",
              marginTop: "20px",
            }}
            onClick={() => {
              setBack(all);
            }}
          >
            SHOW MORE
          </Button>
        ) : null}
      </center>
      <Footer style={footerStyle} />

      <Alert
        className="alert"
        color="success"
        dismiss
        show={isAlertVisible}
        style={{ zIndex: 9999 }}
        onAnimationEnd={() => setIsAlertVisible(false)}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{error}</span>
          <span className="alert-dismiss" onClick={handleAlertToggle}>
            <MDBIcon icon="times" />
          </span>
        </div>
      </Alert>
    </div>
  );
}
