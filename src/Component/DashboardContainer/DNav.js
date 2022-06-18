import React, { useEffect, useState } from "react";

import "./DNav.css";

import { Dashboard, ClassRoom, Message } from "./dashicons";
import { Link } from "react-router-dom";
import img1 from "../../TechStudioimages/Image 129.png";

function DNav() {
  return (
    <div className="DNav bgColor3 fixed-top py-3">
      <div className="DNav_icon d-flex justify-content-around align-items-center flex-sm-column d-block justify-content-md-center py-md-5 gap1 ">
        <Link to="/DashboardHome" className="mt-sm-5 my-md-3">
          <img
            className="img-fluid DNav_logo "
            src={
              img1 ||
              "https://res.cloudinary.com/dkzds0azx/image/upload/v1654336551/Tech%20Studio%20images/Image_129_yqrzep.png"
            }
            alt=""
          />
        </Link>
        <Link to="/Dashboard_User" className="my-sm-2 my-md-3">
          <Dashboard />
        </Link>

        <Link to="/DashboardClass" className="my-sm-2 my-md-3">
          <ClassRoom />
        </Link>

        <Link to="/Dashboard_User" className=" my-md-3">
          <Message />
        </Link>
      </div>
    </div>
  );
}

export default DNav;
