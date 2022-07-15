import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img1 from "../../../media/Group 25128.png";
import img4 from "../../../media/Icon awesome-folder-plus.png";
import img2 from "../../../media/Icon awesome-folder.png";
import img3 from "../../../media/Icon awesome-tasks.png";
import img5 from "../../../media/Icon material-timelapse.png";
import UserPhoto from "../../UserPhoto";
import StaffChart from "../StaffAdminComponent/StaffChart";
import StaffRescheduleClass from "../StaffAdminComponent/StaffRescheduleClass";
import StaffResource from "../StaffAdminComponent/StaffResource";
import img6 from "../StudentDash.js/1.PNG";
import "./AdminHome.css";

function AdminHome() {
  const { user, isStaff, Admin } = useSelector((state) => state.auth);

  return (
    <>
      <div className="StudentDash pt-5 AdminHome bgColor1 pt-sm-0 w-100">
        <div className="mt-5 text-center mt-sm-3 d-lg-flex gap1">
          <div className="w-100">
            <section className="d-md-flex  ms-md-2 justify-content-md-between  align-items-center gap1 ">
              <h1 className="Bold Color"> Dashboard</h1>
              <input
                type="text"
                className="form-control StudentDash_SearchTask d-block m-auto  m-lg-0"
                name=""
                id=""
                placeholder="Search for task and more"
              />

              <div className="mt-1 mt-md-0 d-md-flex AdminHome-class-btn">
                <button className="btn btn-primary me-5 me-md-1 ">
                  Create Course
                </button>

                <Link to="/DashboardClassForm">
                  <button className="btn btn-light border border-primary">
                    Create Class
                  </button>
                </Link>
              </div>
            </section>

            <section className="StudentTaskBoard mt-md-4 mt-5 px-1 px-sm-0 px-md-2">
              <div className="StudentTaskBoard_wrap d-flex justify-content-around flex-wrap  gap1 justify-content-md-start">
                <div className="d-flex justify-content-around align-items-center bgColor4 py-2">
                  <div className="">
                    <img className="img-fluid" src={img2} alt="" />
                  </div>
                  <div>
                    <p> Enrolled Students</p>
                    <p> 24</p>
                  </div>
                </div>

                <div className="d-flex justify-content-around align-items-center bgColor4 py-2 py-lg-4">
                  <div>
                    <img className="img-fluid" src={img3} alt="" />
                  </div>
                  <div>
                    <p> Tutors</p>
                    <p> 24</p>
                  </div>
                </div>

                <div className="d-flex justify-content-around align-items-center bgColor4 py-2 py-lg-4">
                  <div>
                    <img className="img-fluid" src={img4} alt="" />
                  </div>
                  <div>
                    <p> Materials</p>
                    <p> 24</p>
                  </div>
                </div>

                <div className="d-flex justify-content-around align-items-center bgColor4 py-2 py-lg-4">
                  <div>
                    <img className="img-fluid" src={img5} alt="" />
                  </div>{" "}
                  <div>
                    <p>Outstanding fees</p>
                    <p> 24</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="StudentDash_userprofile d-none d-lg-block">
            <UserPhoto />
          </div>
        </div>

        <div className="d-flex flex-column text-start ps-2 flex-sm-row justify-content-around Admin-stack-nav ms-md-2 mt-md-5 ps-md-0">
          <span className="me-md-2"> Mobile Development</span>
          <span className="me-md-2"> Frontend</span>
          <span className="me-md-2"> UI/UX</span>
          <span className="me-md-2">Full Stack</span>
          <span> Data Science</span>
        </div>

        <hr className="my-0" />

        <section className="StudentResource_Chart mt-3 d-lg-flex gap1 mx-sm-2 AdminHome_Resource_Chart">
          <div className="width">
            <StaffResource />
          </div>

          <div className="width mb-5">
            <StaffChart />
          </div>

          <div className="width">
            <StaffRescheduleClass />
          </div>
        </section>
      </div>
    </>
  );
}

export default AdminHome;
