import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineUserSwitch,
  AiFillLock,
  //   AiFillEyeInvisible,
  AiFillEye,
} from "react-icons/ai";
import Loading from "../../components/layout/Loading";
import { useDispatch, useSelector } from "react-redux";
import { doneLoading, startLoading } from "../../redux/actionCreator/loading";
import auth from "../../api/auth";
import modal from "../../helper/modal";

function Register() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.status);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    gender: "",
  });
  useEffect(() => {
    console.log(input);
  }, [input]);

  const registerHandler = async () => {
    try {
      dispatch(startLoading());
      // cek error
      if (input.password !== input.confirm_password) {
        modal.error("Confirm password does not match");
        dispatch(doneLoading());
        return;
      }
      const dataUser = {
        name: input.name,
        email: input.email,
        password: input.password,
        gender: input.gender,
      };
      await auth.register(dataUser);
      modal.success("Success", "Registration has been success");
      dispatch(doneLoading());
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        modal.error(error.response.data.message);
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
                {/* <img src={logo1} alt="logo1" /> */}
                <h2>Register</h2>
              </section>
              <InputGroup className="mb-3">
                <InputGroup.Text className="input-auth" id="basic-addon1">
                  <span className="d-flex align-items-center">
                    {" "}
                    <AiOutlineUser />
                  </span>
                </InputGroup.Text>
                <Form.Control
                  onChange={(e) => setInput({ ...input, name: e.target.value })}
                  value={input.name}
                  className="input-auth"
                  placeholder="Enter Your Name here"
                  aria-label="Name address"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
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
              <InputGroup className="mb-3">
                <InputGroup.Text className="input-auth" id="basic-addon1">
                  <span className="d-flex align-items-center">
                    <AiFillLock />
                  </span>
                </InputGroup.Text>
                <Form.Control
                  onChange={(e) =>
                    setInput({ ...input, confirm_password: e.target.value })
                  }
                  value={input.confirm_password}
                  type="password"
                  className="input-auth"
                  placeholder="Confirm Your Password here"
                  aria-label="Password address"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text className="input-auth" id="basic-addon1">
                  <span className="d-flex align-items-center oncursor">
                    <AiFillEye />
                  </span>
                </InputGroup.Text>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text className="input-auth" id="basic-addon1">
                  <span className="d-flex align-items-center">
                    {" "}
                    <AiOutlineUserSwitch />
                  </span>
                </InputGroup.Text>
                <Form.Select
                  onChange={(e) =>
                    setInput({ ...input, gender: e.target.value })
                  }
                  value={input.gender}
                  className="input-auth"
                  aria-label="Default select example"
                >
                  <option>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Select>
              </InputGroup>
              {input.name !== "" &&
              input.email !== "" &&
              input.password !== "" &&
              input.confirm_password !== "" &&
              input.gender !== "" ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    registerHandler();
                  }}
                  className="btn-secondary-full"
                >
                  Register
                </button>
              ) : (
                <button className="btn-primary2-full">Register</button>
              )}
            </Form>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default Register;
