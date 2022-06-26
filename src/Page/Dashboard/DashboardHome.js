import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashHome from "../../Component/DashboardContainer/DashHome";
import DNav from "../../Component/DashboardContainer/DNav";

import "./DashboardHome.css";
function DashboardHome() {
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  console.log(user);
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
