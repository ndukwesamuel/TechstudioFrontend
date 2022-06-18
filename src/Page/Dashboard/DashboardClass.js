import React from "react";
import DNav from "../../Component/DashboardContainer/DNav";
import StudentClass from "../../Component/DashboardContainer/StudentDash.js/StudentClass";
import "./DashboardClass.css";

function DashboardClass() {
  return (
    <div className="DashboardHome_main bgColor1 ">
      <div className="DashboardHome d-sm-flex  ">
        <DNav />

        <StudentClass />
      </div>
    </div>
  );
}

export default DashboardClass;
