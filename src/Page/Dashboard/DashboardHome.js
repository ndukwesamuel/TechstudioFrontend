import React, { useEffect, useState } from "react";
import DashHome from "../../Component/DashboardContainer/DashHome";
import DNav from "../../Component/DashboardContainer/DNav";

import "./DashboardHome.css";
function DashboardHome() {
  return (
    // bgColor5
    <div className="DashboardHome_main bgColor1 ">
      <div className="DashboardHome d-sm-flex  ">
        <DNav />

        <DashHome />
      </div>
    </div>
  );
}

export default DashboardHome;
