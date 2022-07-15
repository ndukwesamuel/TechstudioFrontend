import React from "react";
import { useSelector } from "react-redux";
import DNav from "../../Component/DashboardContainer/DNav";
import StaffClass from "../../Component/DashboardContainer/Staff/StaffClass";
import StudentClass from "../../Component/DashboardContainer/StudentDash.js/StudentClass";
import "./DashboardClass.css";

function DashboardClass() {
  const { user, isStaff, Admin } = useSelector((state) => state.auth);

  return (
    <div className="DashboardHome_main bgColor1 ">
      <div className="DashboardHome d-sm-flex  ">
        <DNav />

        {isStaff ? <StaffClass /> : <StudentClass />}
      </div>
    </div>
  );
}

export default DashboardClass;
