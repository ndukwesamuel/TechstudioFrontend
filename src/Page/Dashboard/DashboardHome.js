import React, { useEffect, useState } from "react";
import DashHome from "../../Component/DashboardContainer/DashHome";
import DNav from "../../Component/DashboardContainer/DNav";

function DashboardHome() {
  return (
    <div className="DashboardHome_main">
      <div className="DashboardHome d-sm-flex DashboardHome_2">
        <div className="">
          <DNav />
        </div>

        <div>
          <DashHome />
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
