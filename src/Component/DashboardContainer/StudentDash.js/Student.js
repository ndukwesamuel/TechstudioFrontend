import React from "react";
import { useNavigate } from "react-router-dom";

// import img1 from "../../media/Group 25128.png";
import img1 from "../../../media/Group 25128.png";
import Frontend from "../../../Page/Courses/Frontend";
import { UiUXData, FrontendData } from "./TypeOfStudentData";

console.log(UiUXData);
// export const Student

let uiuxs = false;
let frontends = true;
let data;

if (uiuxs) {
  data = (
    <div>
      {UiUXData.map((item) => {
        const { name, id, tools } = item;
        return (
          <p key={id} className="font18px">
            -{name} <a href="test">{tools}</a>
          </p>
        );
      })}
    </div>
  );
} else if (frontends) {
  data = (
    <div>
      {FrontendData.map((item) => {
        const { name, id, tools } = item;
        return (
          <p key={id} className="font18px">
            -{name} <a href="test">{tools}</a>
          </p>
        );
      })}
    </div>
  );
}

function Student() {
  const navigate = useNavigate();

  const Get_started = () => {
    navigate("/Dashboard_User");
  };

  return (
    <>
      <p className="font18px">
        Welcome to Techstudio. Thanks for choosing this platform, we are here to
        guide you through every step of your tech journey.
      </p>

      <h2 className="font18px Color SemiBold ">
        Tools you need to download to get started on this course
      </h2>

      {data}

      <p className="font18px">
        After setting it up, click on ‘get started’ to begin your training.
      </p>
      <button className="btn btn-primary my-2 " onClick={Get_started}>
        {" "}
        Get started
      </button>
      <div className="DashboardIntro_img ">
        <img className="img-fluid  " src={img1} alt="" />
      </div>
    </>
  );
}

export default Student;
