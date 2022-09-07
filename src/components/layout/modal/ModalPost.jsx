import React from "react";
import {
  BsFillHandThumbsUpFill,
  BsFillChatRightTextFill,
  BsFillCursorFill,
  BsXLg,
} from "react-icons/bs";

function ModalPost({ data }) {
  return (
    <div>
      <main className="modal-box-wrap d-flex align-items-center justify-content-center">
        <section className="post-modal-box rounded">
          <section className="close-btn-modal text-end w-100">
            <span onClick={() => data.close(false)}>
              <BsXLg />
            </span>
          </section>
          <section className="p-5 pt-4">
            <section className="post-user-info d-flex justify-content-between align-items-center">
              <img src={data.img} className="rounded-circle" alt="user" />
              <section className="bullet-status rounded-circle"></section>
              <section className="user-info-post ps-3">
                <h5>Rivaldi Siby</h5>
                <p>2 hours</p>
              </section>
            </section>
            <section className="post-main-wrap d-flex pt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate non corrupti id aspernatur voluptates reprehenderit
                ex, dolore accusamus ipsum, illo amet repellat nobis. Ullam quis
                ab ipsa eum molestiae earum.
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
            <section className="post-comment-box d-flex flex-column align-items-center">
              <section className="list-comment-box">
                <section className="user-comment-box d-flex justify-content-between ">
                  <section className="d-flex flex-column start-wrap-comment">
                    <img src={data.img} className="rounded-circle" alt="user" />
                    <p>1 Hours</p>
                  </section>
                  <section className="bullet-status rounded-circle"></section>
                  <section className="user-info-post ps-3">
                    <h5>Rivaldi Siby</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Placeat obcaecati eum eaque? Pariatur voluptates minus
                      totam beatae autem eius harum quisquam ea veritatis nobis
                      minima neque nesciunt, esse perspiciatis non obcaecati
                      mollitia sed enim quod molestiae? Alias, nihil optio
                      accusamus explicabo eius dolore deserunt aperiam, in
                      corporis necessitatibus quidem earum!
                    </p>
                  </section>
                </section>
                <section className="user-comment-box d-flex justify-content-between ">
                  <section className="d-flex flex-column start-wrap-comment">
                    <img src={data.img} className="rounded-circle" alt="user" />
                    <p>1 Hours</p>
                  </section>
                  <section className="bullet-status rounded-circle"></section>
                  <section className="user-info-post ps-3">
                    <h5>Rivaldi Siby</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Placeat obcaecati eum eaque? Pariatur voluptates minus
                      totam beatae autem eius harum quisquam ea veritatis nobis
                      minima neque nesciunt, esse perspiciatis non obcaecati
                      mollitia sed enim quod molestiae? Alias, nihil optio
                      accusamus explicabo eius dolore deserunt aperiam, in
                      corporis necessitatibus quidem earum!
                    </p>
                  </section>
                </section>
              </section>
              <section className="add-comment-box d-flex">
                <textarea placeholder="Add a comment .... "></textarea>
                <button className="rounded-circle">
                  <BsFillCursorFill />
                </button>
              </section>
            </section>
          </section>
        </section>
      </main>
    </div>
  );
}

export default ModalPost;
