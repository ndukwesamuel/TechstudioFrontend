import React from "react";
import DNav from "../../Component/DashboardContainer/DNav";
import StudentAside from "../../Component/DashboardContainer/StudentDash.js/StudentAside";
import StudentDash from "../../Component/DashboardContainer/StudentDash.js/StudentDash";

import "./Dashboard_User.css";

function Dashboard_User() {
  return (
    <div className="DashboardHome_main">
      <div className=" d-sm-flex DashboardHome_2">
        <div className="">
          <DNav />
        </div>

        <section className="Dashboard_User_Sec2 pt-3 ">
          <div className="container-fluid">
            <div className="Dashboard_User_Sec2_wrap d-lg-flex">
              <div className="Dashboard_User_Sec2_wrap_center">
                <StudentDash />
              </div>
              <div className="Dashboard_User_Sec2_wrap_Aside">
                <StudentAside />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard_User;
