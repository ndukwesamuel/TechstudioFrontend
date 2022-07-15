import React from "react";
import DNav from "../../Component/DashboardContainer/DNav";
import StaffClassForm from "../../Component/DashboardContainer/Staff/StaffClassForm";

function DashboardClassForm() {
  return (
    <div className="DashboardHome_main bgColor1 ">
      <div className="DashboardHome d-sm-flex  ">
        <DNav />

        <StaffClassForm />
      </div>
    </div>
  );
}

export default DashboardClassForm;
