import React from "react";

import get_img from "../media/Image1.png";

import "./GetStarted.css";

function GetStarted() {
  return (
    <>
      <div className="GetStarted bgColor3 text-light   text-center py-5  mb-5  text-md-start">
        <div className="ps-1 ps-md-5">
          <p>Try TechStudio</p>
          <p>Get started with Techstudio</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div>
          <img className="img-fluid d-none d-md-block" src={get_img} alt="" />
        </div>
      </div>
    </>
  );
}

export default GetStarted;
