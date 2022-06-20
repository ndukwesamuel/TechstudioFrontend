import React from "react";
import DNav from "../../Component/DashboardContainer/DNav";
import StudentClassDetails from "../../Component/DashboardContainer/StudentDash.js/StudentClassDetails";

function DashboardClassDetails() {
  return (
    <div className="DashboardHome_main bgColor1 ">
      <div className="DashboardHome d-sm-flex  ">
        <DNav />

        <StudentClassDetails />
      </div>
    </div>
  );
}

export default DashboardClassDetails;
