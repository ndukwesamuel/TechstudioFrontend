import React from "react";
import { useSelector } from "react-redux";
import img1 from "../../../media/Group 25128.png";
import img4 from "../../../media/Icon awesome-folder-plus.png";
import img2 from "../../../media/Icon awesome-folder.png";
import img3 from "../../../media/Icon awesome-tasks.png";
import img5 from "../../../media/Icon material-timelapse.png";
import img6 from "../StudentDash.js/1.PNG";

let tutor_img =
  "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1159x506:1161x504)/origin-imgresizer.eurosport.com/2021/08/08/3198904-65533348-2560-1440.jpg";

function StaffDash() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="StudentDash pt-5">
      <section className="d-md-flex  ms-md-2 justify-content-md-between  align-items-center">
        <h1 className="Bold Color"> Dashboard</h1>

        <input
          type="text"
          className="form-control StudentDash_SearchTask d-block m-auto  m-lg-0"
          name=""
          id=""
          placeholder="Search for task and more"
        />
        <button className="btn btn-primary ">Create Class</button>
      </section>

      <section className="StudentIntro bgColor-md mt-md-5 py-md-4">
        <div className="StudentIntro_wrap d-md-flex text-md-start align-items-md-center py-md-2 mt-md-2 position-relative">
          <div className="ps-md-3 ">
            <h1 className="Color font24px mt-2"> Hello {user.first_name}!</h1>
            <p>
              Welcome to your techstudio dashboard. Learn anytime and boost your
              skills
            </p>
          </div>

          <div>
            <img src={img1} className="img-fluid d-none d-md-block" alt="" />
          </div>
        </div>
      </section>

      <section className="StudentTaskBoard mt-md-4">
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
              <p> Tasks assigned</p>
              <p> 24</p>
            </div>
          </div>

          <div className="d-flex justify-content-around align-items-center bgColor4 py-2 py-lg-4">
            <div>
              <img className="img-fluid" src={img4} alt="" />
            </div>
            <div>
              <p> Tasks Submitted</p>
              <p> 24</p>
            </div>
          </div>

          <div className="d-flex justify-content-around align-items-center bgColor4 py-2 py-lg-4">
            <div>
              <img className="img-fluid" src={img5} alt="" />
            </div>{" "}
            <div>
              <p>Weeks Remaining</p>
              <p> 24</p>
            </div>
          </div>
        </div>
      </section>

      <section className="StudentResource_Chart mt-3 d-md-flex gap1 mx-sm-2 ">
        <div className="bgColor4 text-start px-3 py-3">
          <h1 className="font18px SemiBold">Resources</h1>

          <div className="StudentResource_Chart_Nav d-flex bgColor6 gap1 ps-2">
            <span className="SemiBold font1rem">PDF</span>
            <span className="SemiBold font1rem"> VIDEO</span>
            <span className="SemiBold font1rem">AUDIO</span>
          </div>

          <div className="mt-3">
            <div className="StudentResource_Download d-flex  justify-content-between  ">
              <p className="">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 StudentResource_Chart_icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span className=""> Design and Insights.pdf</span>
              </p>
              <p className="Regular ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 Download_icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </span>
                Download
              </p>
            </div>
            {/* end */}

            <div className="StudentResource_Download d-flex  justify-content-between  ">
              <p className="">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 StudentResource_Chart_icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span className=""> Design and Insights.pdf</span>
              </p>
              <p className="Regular ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 Download_icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </span>
                Download
              </p>
            </div>
            {/* end */}

            <div className="StudentResource_Download d-flex  justify-content-between  ">
              <p className="">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 StudentResource_Chart_icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span className=""> Design and Insights.pdf</span>
              </p>
              <p className="Regular ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 Download_icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </span>
                Download
              </p>
            </div>
            {/* end */}

            <div className="StudentResource_Download d-flex  justify-content-between  ">
              <p className="">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 StudentResource_Chart_icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span className=""> Design and Insights.pdf</span>
              </p>
              <p className="Regular ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 Download_icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </span>
                Download
              </p>
            </div>
            {/* end */}

            <div className="StudentResource_Download d-flex  justify-content-between  ">
              <p className="">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 StudentResource_Chart_icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span className=""> Design and Insights.pdf</span>
              </p>
              <p className="Regular ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 Download_icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </span>
                Download
              </p>
            </div>
            {/* end */}
          </div>
        </div>

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
                I am so glad to hear plenty of answers from you during class.
                Keep doing great!
              </p>
            </div>

            <div className="d-flex gap1 px-3 align-items-center">
              <p className="Bold font1rem">Sorunke Sherif</p>
              <p className="Bold font0rem ">May 3, 2021</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StaffDash;
