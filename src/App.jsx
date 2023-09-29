import "./App.scss";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const sayHi = () => {
    alert("Get CV");
  };

  return (
    <div className="App">
      <div className=" justify-content-md-flex-end">
        <Button onClick={sayHi} variant="primary" className="app-name">
          DOWNLOAD MY CV
        </Button>
      </div>
      <Container className="text-center">
        <Row className="justify-content-md-center">
          <Col md lg="2" className="navbar-container">
            <ul className="navbar">
              <li>HOME</li>
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
            <h2>KICK OFF</h2>
          </Col>
          <Col md="4" className="text-center menu-container ">
            <div className="slider hvr-sweep-to-left ">
              <a href="#slide-1">1</a>
              <a href="#slide-2">2</a>
              <a href="#slide-3">3</a>

              <div className="slides hvr-sweep-to-left ">
                <div id="slide-1 hvr-sweep-to-left">Claim your Pack</div>
                <div id="slide-2 hvr-sweep-to-left">2</div>
                <div id="slide-3 hvr-sweep-to-left">3</div>
              </div>
            </div>

            <div className="contact hvr-sweep-to-left">
              <h2>CONTACT</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
