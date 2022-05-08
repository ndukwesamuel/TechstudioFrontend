import React from "react";
import "./Dash.css";

import img from "../../media/1.jpeg";

function Dash() {
  return (
    <div className="Dash_sec_one ">
      <div className="Dash_sec_1">
        <h1> Dashboard</h1>
      </div>
      <div className="dash_search">
        <input className="Dash_input" type="text" name="" id="" />
        <button className="Create_Course_btn btn">Create Course</button>
        <button className="Create_Classes_btn btn">Create Classes</button>
      </div>
      <div>
        <img className="dash_profile" src={img} alt="" />
      </div>
    </div>
  );
}

export default Dash;
