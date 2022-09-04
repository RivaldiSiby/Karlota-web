import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {
  AiOutlineMail,
  AiOutlineLock,
  AiFillEyeInvisible,
  AiFillEye,
} from "react-icons/ai";
import Loading from "../../components/layout/Loading";
import { useDispatch, useSelector } from "react-redux";
// img
import logo1 from "../../assets/img/logo/logo1.jpg";
import { startLoading, doneLoading } from "../../redux/actionCreator/loading";
import auth from "../../api/auth";
import { addAuth } from "../../redux/actionCreator/auth";
import { useNavigate } from "react-router-dom";
import modal from "../../helper/modal";

function Login() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.status);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = useState({
    pass: false,
  });

  const loginHandler = async () => {
    try {
      dispatch(startLoading());
      const result = await auth.login(input);
      modal.success("Success", "Login has been success");
      // make user auth
      console.log(result);
      dispatch(addAuth(result));
      dispatch(doneLoading());
      navigate("/dashboard");
    } catch (error) {
      if (error.response.status === 400) {
        modal.error(error.response.data.message);
        setInput({
          email: "",
          password: "",
        });
      }
      dispatch(doneLoading());
    }
  };

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
                  onChange={(e) =>
                    setInput({ ...input, email: e.target.value })
                  }
                  value={input.email}
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
                  onChange={(e) =>
                    setInput({ ...input, password: e.target.value })
                  }
                  value={input.password}
                  type={show.pass === true ? "text" : "password"}
                  className="input-auth"
                  placeholder="Enter Your Password here"
                  aria-label="Password address"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text className="input-auth" id="basic-addon1">
                  {show.pass === false ? (
                    <span
                      onClick={() => setShow({ ...show, pass: true })}
                      className="d-flex align-items-center oncursor"
                    >
                      <AiFillEye />
                    </span>
                  ) : (
                    <span
                      onClick={() => setShow({ ...show, pass: false })}
                      className="d-flex align-items-center oncursor"
                    >
                      <AiFillEyeInvisible />
                    </span>
                  )}
                </InputGroup.Text>
              </InputGroup>

              {input.email !== "" && input.password !== "" ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    loginHandler();
                  }}
                  className="btn-secondary-full"
                >
                  Login
                </button>
              ) : (
                <button className="btn-primary2-full">Login</button>
              )}
            </Form>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default Login;
