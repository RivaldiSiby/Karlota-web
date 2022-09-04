import React from "react";
import { useSelector } from "react-redux";
import NavbarUser from "../../components/layout/NavbarUser";

function Dashboard() {
  const user = useSelector((state) => state.auth);
  console.log(user);
  return (
    <>
      <NavbarUser />
      <div>Dashboard User</div>
    </>
  );
}

export default Dashboard;
