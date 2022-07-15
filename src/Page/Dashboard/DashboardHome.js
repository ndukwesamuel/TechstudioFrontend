import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashHome from "../../Component/DashboardContainer/DashHome";
import DNav from "../../Component/DashboardContainer/DNav";

import { getUser, reset } from "../../features/userInfo/userinfoSlice";

import "./DashboardHome.css";
function DashboardHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isStaff, Admin } = useSelector((state) => state.auth);

  const { userinfo, isError, message } = useSelector((state) => state.userinfo);
  console.log(userinfo);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getUser(user._id));

    if (isStaff) {
      navigate("/Dashboard_User");
    }

    return () => {
      dispatch(reset());
    };
  }, []);

  return (
    // bgColor5
    <div className="DashboardHome_main bgColor1 ">
      <div className="DashboardHome d-sm-flex  ">
        <DNav />

        <DashHome userdata={userinfo} />
      </div>
    </div>
  );
}

export default DashboardHome;
