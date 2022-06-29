import React from "react";
import { useSelector } from "react-redux";
import DNav from "../../Component/DashboardContainer/DNav";
import StudentAside from "../../Component/DashboardContainer/StudentDash.js/StudentAside";
import StudentDash from "../../Component/DashboardContainer/StudentDash.js/StudentDash";

import StaffDash from "../../Component/DashboardContainer/Staff/StaffDash";
import "./DashboardUser.css";

// const {}
function Dashboard_User({ staff }) {
  const { isStaff } = useSelector((state) => state.auth);

  return (
    <div className="d-sm-flex">
      <div className="">
        <DNav />
      </div>

      <section className="UserDashboard pt-5 pt-sm-0 text-center w-100  d-lg-flex bgColor1 ">
        <div className="Dashboard_User_center px-md-2">
          {isStaff ? <StaffDash /> : <StudentDash />}
        </div>
        <div className="Dashboard_User_Aside">
          <StudentAside />
        </div>
      </section>
    </div>
  );
}

export default Dashboard_User;
