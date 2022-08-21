import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {
  AiOutlineMail,
  AiOutlineLock,
  //   AiFillEyeInvisible,
  AiFillEye,
} from "react-icons/ai";
import Loading from "../../components/layout/Loading";
import { useDispatch, useSelector } from "react-redux";
// img
import logo1 from "../../assets/img/logo/logo1.jpg";
import { startLoading } from "../../redux/actionCreator/loading";

function Login() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.status);
  return (
    <>
      {loading === true ? <Loading /> : ""}
      <main className="main-auth">
        <Row className="box-row">
          <Col className="left-auth" md="6">
            <section className="d-flex justify-content-bet align-items-center">
              <h2>STAY CONNECTED WITH US</h2>
            </section>
          </Col>
          <Col
            className="right-auth d-flex justify-content-center align-items-center"
            md="6"
          >
            <Form className="form-auth d-flex flex-column justify-content-center">
              <section className="d-flex flex-column justify-content-center">
                <img src={logo1} alt="logo1" />
                <h2>Login</h2>
              </section>
              <InputGroup className="mb-3">
                <InputGroup.Text className="input-auth" id="basic-addon1">
                  <span className="d-flex align-items-center">
                    {" "}
                    <AiOutlineMail />
                  </span>
                </InputGroup.Text>
                <Form.Control
                  className="input-auth"
                  placeholder="Enter Your Email here"
                  aria-label="Email address"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text className="input-auth" id="basic-addon1">
                  <span className="d-flex align-items-center">
                    <AiOutlineLock />
                  </span>
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  className="input-auth"
                  placeholder="Enter Your Password here"
                  aria-label="Password address"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text className="input-auth" id="basic-addon1">
                  <span className="d-flex align-items-center oncursor">
                    <AiFillEye />
                  </span>
                </InputGroup.Text>
              </InputGroup>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(startLoading());
                }}
                className="btn-secondary-full"
              >
                Login
              </button>
            </Form>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default Login;
