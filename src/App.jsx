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
          <Col md="4" className="text-center portafolio">
            <h2>PORTFOLIO</h2>
          </Col>
          <Col md="4" className="text-center kick-off">
            <h2>KICK OFF</h2>
          </Col>
          <Col md="4" className="text-center menu-container">
            <div className="about">
              <h2>CLAIM YOUR PACK</h2>
              <p>GET THE BEST OF THE BEST</p>

              <p>ANADIR CARRUSEL</p>
            </div>
            <div className="contact">
              <h2>CONTACT</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
