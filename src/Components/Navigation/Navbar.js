import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="main_sec_one">
      <div className="Nav_bar">
        <div className="nav_icons">
          <div className="">
            <img className="logo_icon" src="/assets/images/logo.svg" alt="" />
          </div>
          <div>
            <Link to="/">
              <img src="/assets/images/dash_icon.png" alt="" />
            </Link>
          </div>
          <div>
            <Link to="class">
              <img src="/assets/images/sch_icon.png" alt="" />
            </Link>
          </div>

          <div>
            <Link to="/message">
              <img src="/assets/images/message_icon.png" alt="" />
            </Link>
          </div>
          <div>
            <Link to="/task">
              <img
                className="navprofile"
                src="/assets/images/task_icon.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
