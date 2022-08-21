import React from "react";
import NavbarMenu from "../components/layout/NavbarMenu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imgHead from "../assets/img/home-img.jpg";
import Footer from "../components/layout/Footer";

function LandingPage() {
  return (
    <>
      <NavbarMenu />
      <main className="main-body top-config-nav">
        <Container>
          <Row>
            <Col
              md="6"
              className="img-box d-flex justify-content-center align-items-center"
            >
              <img src={imgHead} alt="imgHead" />
            </Col>
            <Col md="6" className="info-box py-auto d-flex align-items-center">
              <section>
                <h1>
                  STAY <span>CONNECTED</span> WITH <span>US</span>
                </h1>
                <p>
                  <span className="fw-bold">BKarlota</span>
                  is a real-time chat platform, which can connect us all
                  anywhere and anytime
                </p>
                <button className="btn-primary-outline shadow">
                  GET STARTED
                </button>
              </section>
            </Col>
          </Row>
        </Container>
        <section className="w-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#5c4f82"
              fill-opacity="1"
              d="M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,240C672,267,768,277,864,277.3C960,277,1056,267,1152,250.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
