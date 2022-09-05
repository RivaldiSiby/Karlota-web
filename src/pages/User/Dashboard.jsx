import React from "react";
import { useSelector } from "react-redux";
import NavbarUser from "../../components/layout/NavbarUser";

function Dashboard() {
  const user = useSelector((state) => state.auth);
  console.log(user);
  return (
    <>
      <NavbarUser />
      <main className="wrap-dash">
        <section className="main-body-dash container">
          <section className="main-user-info">user</section>
          <section className="main-box-wrap ">contact</section>
          <section className="main-contact-list ">content</section>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
