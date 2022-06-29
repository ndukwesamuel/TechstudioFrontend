import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import img1 from "../../media/Group 25128.png";
import "./DashHome.css";

// import Student from "../"

import Student from "./StudentDash.js/Student";
function DashHome({ userdata }) {
  useEffect(() => {
    // let name = "";
    return () => {};
  }, []);
  return (
    <div className="DashboardIntro mt-lg-5 pt-5 pt-md-0">
      <div className="DashboardIntro_wrap  py-1  text-center  text-lg-start bgColor4 mt-lg-5 position-relative ms-lg-4 pb-lg-5">
        <h1 className="mt-5 Color font24px">
          Hello {userdata ? userdata.first_name : "Tomiwa"}!
        </h1>
        <Student />
      </div>
    </div>
  );
}

export default DashHome;
