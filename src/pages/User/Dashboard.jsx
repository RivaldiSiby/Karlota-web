import React from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import NavbarUser from "../../components/layout/NavbarUser";

// img
import userImg from "../../assets/img/user.jpg";

function Dashboard() {
  const user = useSelector((state) => state.auth);
  console.log(user);
  return (
    <>
      <NavbarUser />
      <main className="wrap-dash">
        <section className="main-body-dash container">
          <div className="main-user-info">
            <section className="profile-user border d-flex align-items-center justify-content-center">
              <img src={userImg} className="img-profile-user" alt="user" />
            </section>
            <section className="profile-info border d-flex flex-column justify-content-center bg-danger">
              <h5>Rivaldi Siby</h5>
              <p>rivaldisiby@gmail.com</p>
              {/* <h4>Gemini</h4> */}
            </section>
            <section className="profile-desc border">Desc</section>
          </div>
          <div className="main-box-wrap ">contact</div>
          <div className="main-contact-list ">
            <section>Contact</section>
            <section>Contact</section>
            <section>Contact</section>
            <section>Contact</section>
          </div>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
