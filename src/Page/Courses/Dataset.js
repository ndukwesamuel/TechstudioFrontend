import React from "react";

import img1 from "../../media/Group 25213.png";
import img2 from "../../media/Group 25214.png";

import img3 from "../../media/Group 25215.png";

import front from "../../media/front.PNG";
import z from "../../media/z.PNG";

import "./dataset.css";
import GetStarted from "../../Component/GetStarted";

function Dataset({
  data_img1,
  data_head,
  data_head_sub,
  data_process_1,
  data_process_2,
  data_process_3,
}) {
  return (
    <section className="CourseType">
      <section className="CourseTypeName text-center mt-4 d-md-flex gap1 text-md-start py-lg-5">
        <div className=" pt-lg-5">
          <h1 className="SemiBold Color1 font40px"> {data_head}</h1>

          <p>{data_head_sub}</p>
        </div>
        <div className="">
          <img className="img-fluid " src={data_img1} alt="" />{" "}
        </div>
      </section>

      <section className="CourseTypeProcess text-center py-5">
        <div className="">
          <h1 className=" pb-4"> Our Process</h1>

          <div className="d-md-flex gap1">
            <div className="">
              <div className="CourseTypeProcess_Number position-relative">
                <img className="img-fluid  " src={img1} alt="" />
                <div className="position-absolute font32px text-light">01</div>
              </div>
              <p className="">{data_process_1}</p>
            </div>

            <div className="">
              <div className="CourseTypeProcess_Number position-relative">
                <img className="img-fluid  " src={img2} alt="" />
                <div className="position-absolute font32px text-light">02</div>
              </div>

              <p className="">{data_process_2}</p>
            </div>

            <div className="">
              <div className="CourseTypeProcess_Number position-relative">
                <img className="img-fluid  " src={img3} alt="" />
                <div className="position-absolute font32px text-light">03</div>
              </div>

              <p className="">{data_process_3}</p>
            </div>
          </div>
        </div>
      </section>

      <div>
        <GetStarted />
      </div>
    </section>
  );
}

export default Dataset;
