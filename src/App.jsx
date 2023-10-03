import "./App.scss";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import Image from "./assets/VS.png";
import Nights from "./assets/nights.mp3";
import CV from "./assets/CV.pdf";

function App() {
  const pdfUrl = "https://localhost:5173/assets/CV.pdf";

  const getFile = (url) => {
    const fileName = url.split("/").pop();
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  let song = new Audio(Nights);

  function Play() {
    song.play();
  }

  function Pause() {
    song.pause();
  }

  return (
    <div className="App">
      <div className=" justify-content-md-flex-end">
        <Button
          onClick={() => {
            getFile(pdfUrl);
          }}
          variant="primary"
          className="app-name"
        >
          DOWNLOAD CV
        </Button>
        <Button onClick={Pause} variant="primary" className="app-name">
          STOP SONG
        </Button>
      </div>
      <Container className="text-center">
        <Row className="justify-content-md-center">
          <Col md lg="2" className="navbar-container">
            <ul className="navbar">
              <li className="navbar-active">HOME</li>
              <li>PLAY</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
            </ul>
          </Col>
        </Row>
        <Row className="menu">
          <Col md="4" className="text-center portafolio hvr-sweep-to-bottom">
            <h2>PORTFOLIO</h2>
          </Col>
          <Col md="4" className="text-center kick-off hvr-sweep-to-bottom">
            <div className="kick-off-content">
              <h2>KICK OFF</h2>

              <div className="kick-off-info">
                <h3>LIVERPOOL</h3>
                {/*<h4>VS</h4>*/}
                <img src={Image}></img>
                <h3>EVERTON</h3>
              </div>
            </div>
          </Col>
          <Col md="4" className="text-center menu-container ">
            <div className="slider">
              <input
                type="radio"
                name="slider"
                title="slide1"
                checked="checked"
                className="slider__nav"
              />
              <input
                type="radio"
                name="slider"
                title="slide2"
                className="slider__nav"
              />
              <input
                type="radio"
                name="slider"
                title="slide3"
                className="slider__nav"
              />
              <div className="slider__inner">
                <div className="slider__contents hvr-sweep-to-left">
                  <h2 className="slider__caption">SOFTWARE DEVELOPER</h2>
                  <p className="slider__txt">
                    Graduated from URBE, with experience in React, Angular and
                    Web design as a whole.
                  </p>
                </div>
                <div class="slider__contents hvr-sweep-to-left">
                  <h2 class="slider__caption">COMMUNITY MANAGER</h2>
                  <p class="slider__txt">
                    Multiple years of experience across many accounts, from
                    phone parts to barbershops, I can lead a Social Media team
                    with ease
                  </p>
                </div>
                <div class="slider__contents hvr-sweep-to-left">
                  <h2 class="slider__caption">PROMPT ENGINEER</h2>
                  <p class="slider__txt">
                    I've been using AI to optimize work load for years, and I'm
                    always looking for new ways to improve my skills, I'm also
                    proficient in AI Art generation and such.
                  </p>
                </div>
              </div>
            </div>
            {/*<div className="about hvr-sweep-to-left">
              <h2>CLAIM YOUR PACK</h2>
              <p>GET THE BEST OF THE BEST</p>

              <p>ANADIR CARRUSEL</p>
            </div>*/}

            <div className="contact hvr-sweep-to-left">
              <h2>CONTACT</h2>
              <p>GITHUB: Madvillainism</p>
              <p>EMAIL: carlosperezph@hotmail.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
