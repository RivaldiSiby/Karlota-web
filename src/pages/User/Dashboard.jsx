import React, { useState } from "react";
// import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import NavbarUser from "../../components/layout/NavbarUser";
import {
  BsHandThumbsUp,
  BsPeople,
  BsFillHandThumbsUpFill,
  BsFillChatRightTextFill,
  BsReverseLayoutTextWindowReverse,
} from "react-icons/bs";
// img
import userImg from "../../assets/img/user.jpg";
import ModalPost from "../../components/layout/modal/ModalPost";

function Dashboard() {
  const user = useSelector((state) => state.auth);
  const [showPost, setShowPost] = useState(false);
  return (
    <>
      {/* modal */}
      {/* post */}
      {showPost === true ? (
        <>
          <ModalPost
            data={{
              img: userImg,
              close: setShowPost,
            }}
            // close={setShowPost}
          />
        </>
      ) : (
        ""
      )}
      {/* modal */}
      <NavbarUser />
      <main className="wrap-dash">
        <section className="main-body-dash container">
          <div className="main-user-info">
            <section className="profile-user d-flex align-items-center justify-content-center">
              <img src={userImg} className="img-profile-user" alt="user" />
            </section>
            <section className="profile-info d-flex flex-column justify-content-center ">
              <h5>Rivaldi Siby</h5>
              <p>rivaldisiby@gmail.com</p>
              {/* <h4>Gemini</h4> */}
            </section>
            <section className="profile-desc d-flex align-items-center justify-content-between px-4">
              <h4>
                <BsHandThumbsUp />
                <span>155</span>
              </h4>
              <h4>
                <BsPeople />
                <span>755</span>
              </h4>
              <h4>
                <BsReverseLayoutTextWindowReverse />
                <span>5</span>
              </h4>
            </section>
          </div>
          {/* content */}
          <div className="main-box-wrap d-flex flex-column align-items-center">
            <section className="wrap-post-box ">
              <section className="post-user-info d-flex justify-content-between align-items-center">
                <img src={userImg} className="rounded-circle" alt="user" />
                <section className="bullet-status rounded-circle"></section>
                <section className="user-info-post ps-3">
                  <h5>Rivaldi Siby</h5>
                  <p>5 hours</p>
                </section>
              </section>
              <section className="post-main-wrap d-flex pt-3">
                <p onClick={() => setShowPost(true)}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate non corrupti id aspernatur voluptates reprehenderit
                  ex, dolore accusamus ipsum, illo amet repellat nobis. Ullam
                  quis ab ipsa eum molestiae earum.
                </p>
              </section>
              <section className="post-main-foot d-flex align-items-center">
                <h5>
                  <BsFillHandThumbsUpFill />
                  <sup>57</sup>
                </h5>
                <h5>
                  <BsFillChatRightTextFill />
                  <sup>5</sup>
                </h5>
              </section>
            </section>
            <section className="wrap-post-box ">
              <section className="post-user-info d-flex justify-content-between align-items-center">
                <img src={userImg} className="rounded-circle" alt="user" />
                <section className="bullet-status rounded-circle"></section>
                <section className="user-info-post ps-3">
                  <h5>Rivaldi Siby</h5>
                  <p>5 hours</p>
                </section>
              </section>
              <section className="post-main-wrap d-flex pt-3">
                <p onClick={() => setShowPost(true)}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate non corrupti id aspernatur voluptates reprehenderit
                  ex, dolore accusamus ipsum, illo amet repellat nobis. Ullam
                  quis ab ipsa eum molestiae earum.
                </p>
              </section>
              <section className="post-main-foot d-flex align-items-center">
                <h5>
                  <BsFillHandThumbsUpFill />
                  <sup>57</sup>
                </h5>
                <h5>
                  <BsFillChatRightTextFill />
                  <sup>5</sup>
                </h5>
              </section>
            </section>
            <section className="wrap-post-box ">
              <section className="post-user-info d-flex justify-content-between align-items-center">
                <img src={userImg} className="rounded-circle" alt="user" />
                <section className="bullet-status rounded-circle"></section>
                <section className="user-info-post ps-3">
                  <h5>Rivaldi Siby</h5>
                  <p>5 hours</p>
                </section>
              </section>
              <section className="post-main-wrap d-flex pt-3">
                <p onClick={() => setShowPost(true)}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate non corrupti id aspernatur voluptates reprehenderit
                  ex, dolore accusamus ipsum, illo amet repellat nobis. Ullam
                  quis ab ipsa eum molestiae earum.
                </p>
              </section>
              <section className="post-main-foot d-flex align-items-center">
                <h5>
                  <BsFillHandThumbsUpFill />
                  <sup>57</sup>
                </h5>
                <h5>
                  <BsFillChatRightTextFill />
                  <sup>5</sup>
                </h5>
              </section>
            </section>
            <section className="wrap-post-box ">
              <section className="post-user-info d-flex justify-content-between align-items-center">
                <img src={userImg} className="rounded-circle" alt="user" />
                <section className="bullet-status rounded-circle"></section>
                <section className="user-info-post ps-3">
                  <h5>Rivaldi Siby</h5>
                  <p>5 hours</p>
                </section>
              </section>
              <section className="post-main-wrap d-flex pt-3">
                <p onClick={() => setShowPost(true)}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate non corrupti id aspernatur voluptates reprehenderit
                  ex, dolore accusamus ipsum, illo amet repellat nobis. Ullam
                  quis ab ipsa eum molestiae earum.
                </p>
              </section>
              <section className="post-main-foot d-flex align-items-center">
                <h5>
                  <BsFillHandThumbsUpFill />
                  <sup>57</sup>
                </h5>
                <h5>
                  <BsFillChatRightTextFill />
                  <sup>5</sup>
                </h5>
              </section>
            </section>
            <section className="wrap-post-box ">
              <section className="post-user-info d-flex justify-content-between align-items-center">
                <img src={userImg} className="rounded-circle" alt="user" />
                <section className="bullet-status rounded-circle"></section>
                <section className="user-info-post ps-3">
                  <h5>Rivaldi Siby</h5>
                  <p>5 hours</p>
                </section>
              </section>
              <section className="post-main-wrap d-flex pt-3">
                <p onClick={() => setShowPost(true)}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate non corrupti id aspernatur voluptates reprehenderit
                  ex, dolore accusamus ipsum, illo amet repellat nobis. Ullam
                  quis ab ipsa eum molestiae earum.
                </p>
              </section>
              <section className="post-main-foot d-flex align-items-center">
                <h5>
                  <BsFillHandThumbsUpFill />
                  <sup>57</sup>
                </h5>
                <h5>
                  <BsFillChatRightTextFill />
                  <sup>5</sup>
                </h5>
              </section>
            </section>
          </div>
          {/* content */}
          <div className="main-contact-list ">
            <section className="contact-user-box d-flex align-items-center mx-2">
              <img src={userImg} className="rounded-circle" alt="user" />
              <section className="bullet-status rounded-circle"></section>
              <section className="contact-user-info px-3">
                <h5>Veyli Siby</h5>
                <p>rivaldi-siby</p>
              </section>
              <section className="contact-user-end pt-3">
                <p>09.00</p>
              </section>
            </section>
            <section className="contact-user-box d-flex align-items-center mx-2">
              <img src={userImg} className="rounded-circle" alt="user" />
              <section className="bullet-status rounded-circle"></section>
              <section className="contact-user-info px-3">
                <h5>Veyli Siby</h5>
                <p>rivaldi-siby</p>
              </section>
              <section className="contact-user-end pt-3">
                <p>09.00</p>
              </section>
            </section>
            <section className="contact-user-box d-flex align-items-center mx-2">
              <img src={userImg} className="rounded-circle" alt="user" />
              <section className="bullet-status rounded-circle"></section>
              <section className="contact-user-info px-3">
                <h5>Veyli Siby</h5>
                <p>rivaldi-siby</p>
              </section>
              <section className="contact-user-end pt-3">
                <p>09.00</p>
              </section>
            </section>
            <section className="contact-user-box d-flex align-items-center mx-2">
              <img src={userImg} className="rounded-circle" alt="user" />
              <section className="bullet-status rounded-circle"></section>
              <section className="contact-user-info px-3">
                <h5>Veyli Siby</h5>
                <p>rivaldi-siby</p>
              </section>
              <section className="contact-user-end pt-3">
                <p>09.00</p>
              </section>
            </section>
            <section className="contact-user-box d-flex align-items-center mx-2">
              <img src={userImg} className="rounded-circle" alt="user" />
              <section className="bullet-status rounded-circle"></section>
              <section className="contact-user-info px-3">
                <h5>Veyli Siby</h5>
                <p>rivaldi-siby</p>
              </section>
              <section className="contact-user-end pt-3">
                <p>09.00</p>
              </section>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
