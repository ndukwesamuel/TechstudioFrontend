import React from "react";
import img1 from "../../media/Group 25128.png";
import "./DashHome.css";
function DashHome() {
  return (
    <div className="DashboardHome_2">
      <div className="container-xxl">
        <div className="DashboardHome_2_wrap py-5  text-center  text-md-start">
          <h1 className="mt-5"> Hello Tomiwa!</h1>
          <p>
            Welcome to Techstudio. Thanks for choosing this platform, we are
            here to guide you through every step of your tech journey.
          </p>

          <h2> Tools you need to download to get started on this course</h2>

          <p>
            -Adobe XD <a href="test">adobe.com/products/xd</a>{" "}
          </p>

          <p>
            -Figma <a href="test">adobe.com/products/xd</a>{" "}
          </p>
          <p>
            After setting it up, click on ‘get started’ to begin your training.
          </p>

          <button className="btn btn-primary my-2"> Get started</button>

          <div className="img1">
            <img className="img-fluid  " src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashHome;
