import React from "react";

import img6 from "../StudentDash.js/1.PNG";

let tutor_img =
  "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1159x506:1161x504)/origin-imgresizer.eurosport.com/2021/08/08/3198904-65533348-2560-1440.jpg";

function StaffChart() {
  return (
    <div className="w-100">
      <div className=" mt-3 mt-md-0">
        <div>
          <img src={img6} className="img-fluid" alt="" />
        </div>

        <div className="bgColor4 mt-3 py-2 px-1">
          <div className="d-flex justify-content-between px-3">
            <p>Tutor’s Feedbacks</p>
            <p>View All</p>
          </div>

          <div className="d-flex StudentResource_Tutor_FeedBack justify-content-around ms-2">
            <img src={tutor_img} className="d-block img-fluid" alt="" />
            <p className="font1rem text-start px-1">
              I am so glad to hear plenty of answers from you during class. Keep
              doing great!
            </p>
          </div>

          <div className="d-flex gap1 px-3 align-items-center">
            <p className="Bold font1rem">Sorunke Sherif</p>
            <p className="Bold font0rem ">May 3, 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffChart;
