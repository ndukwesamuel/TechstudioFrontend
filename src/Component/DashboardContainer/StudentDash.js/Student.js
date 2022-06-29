import React from "react";

// import img1 from "../../media/Group 25128.png";
import img1 from "../../../media/Group 25128.png";

// export const Student

function Student() {
  return (
    <>
      <p className="font18px">
        Welcome to Techstudio. Thanks for choosing this platform, we are here to
        guide you through every step of your tech journey.
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
    </>
  );
}

export default Student;
