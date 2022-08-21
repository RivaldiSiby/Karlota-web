import React from "react";
import loading from "../../assets/img/load.gif";

function Loading() {
  return (
    <>
      <main className="loading-main d-flex align-items-center justify-content-center">
        <section className="d-flex">
          <img src={loading} alt="load" />
          <h2>Loading</h2>
        </section>
      </main>
    </>
  );
}

export default Loading;
