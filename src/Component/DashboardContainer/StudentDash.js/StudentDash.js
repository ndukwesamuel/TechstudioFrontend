import React from "react";

import img1 from "../../../media/Group 25128.png";
import img4 from "../../../media/Icon awesome-folder-plus.png";
import img2 from "../../../media/Icon awesome-folder.png";
import img3 from "../../../media/Icon awesome-tasks.png";

import img5 from "../../../media/Icon material-timelapse.png";

import "./StudentDash.css";
function StudentDash() {
  return (
    <div className="StudentDash">
      <section className=" StudentDash_sec1 d-lg-flex justify-content-lg-between align-items-lg-center">
        <h1> Dashboard</h1>

        <input
          type="text"
          className="form-control "
          name=""
          id=""
          placeholder="Search for task and more"
        />
      </section>

      <section className="StudentDash_sec2">
        <div className="StudentDash_sec2_wrap">
          <h1> Hello Tomiwa!</h1>

          <p>
            Welcome to your techstudio dashboard. Learn anytime and boost your
            skills
          </p>

          <div>
            {" "}
            <img src={img1} className="img-fluid" alt="" />
          </div>
        </div>
      </section>

      <section className="StudentDash_sec3">
        <div className="StudentDash_sec3_wrap d-lg-flex justify-content-lg-between ">
          <div className="d-lg-flex justify-content-lg-around align-items-lg-center">
            <div className="StudentDash_sec3_wrap_img_div">
              <img className="img-fluid" src={img2} alt="" />
            </div>
            <div>
              <p> Total Task</p>
              <p> 24</p>
            </div>
          </div>

          <div className="d-lg-flex justify-content-lg-around align-items-lg-center">
            <img className="img-fluid" src={img3} alt="" />
            <div>
              <p> Total Task</p>
              <p> 24</p>
            </div>
          </div>

          <div className="d-lg-flex justify-content-lg-around align-items-lg-center">
            <img className="img-fluid" src={img4} alt="" />
            <div>
              <p> Total Task</p>
              <p> 24</p>
            </div>
          </div>

          <div className="d-lg-flex justify-content-lg-around align-items-lg-center">
            <img className="img-fluid" src={img5} alt="" />
            <div>
              <p> Total Task</p>
              <p> 24</p>
            </div>
          </div>
        </div>
      </section>

      <section className="StudentDash_sec4">
        <div className="StudentDash_sec4_wrap d-lg-flex justify-content-lg-between ">
          <div>1</div>
          <div>2</div>
        </div>
      </section>
    </div>
  );
}

export default StudentDash;
