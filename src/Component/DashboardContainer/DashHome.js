import React from "react";
import img1 from "../../media/Group 25128.png";
import "./DashHome.css";
function DashHome() {
  return (
    <div className="DashboardIntro mt-lg-5 pt-5 pt-md-0">
      <div className="DashboardIntro_wrap  py-1  text-center  text-lg-start bgColor4 mt-lg-5 position-relative ms-lg-4 pb-lg-5">
        <h1 className="mt-5 Color font24px"> Hello Tomiwa!</h1>
        <p className="font18px">
          Welcome to Techstudio. Thanks for choosing this platform, we are here
          to guide you through every step of your tech journey.
        </p>
        <h2 className="font18px Color SemiBold ">
          {" "}
          Tools you need to download to get started on this course
        </h2>
        <p className="font18px">
          -Adobe XD <a href="test">adobe.com/products/xd</a>
        </p>
        <p className="font18px">
          -Figma <a href="test">adobe.com/products/xd</a>
        </p>
        <p className="font18px">
          After setting it up, click on ‘get started’ to begin your training.
        </p>
        <button className="btn btn-primary my-2"> Get started</button>
        <div className="DashboardIntro_img ">
          <img className="img-fluid  " src={img1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DashHome;
