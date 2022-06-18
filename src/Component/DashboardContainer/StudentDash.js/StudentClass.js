import React, { cloneElement } from "react";
import { ClockIcon } from "../Others";

import "./StudentClass.css";
let img1 =
  "https://i.pinimg.com/236x/a3/61/1f/a3611f31c35eb4dfe1f045c592c49b5d.jpg";

function StudentClass() {
  return (
    <div className="mt-5 pt-4  bgColor4 mt-sm-0 mx-sm-2 w-100">
      <p className="Bold font24px  Color ms-3">Classes</p>

      <div className="ClassNav ms-3 d-flex  bgColor6 justify-content-around gap1 text-center ">
        <span>LIVE</span> <span>RECORDED</span>
      </div>

      <div className="d-lg-flex Class-content mt-lg-3">
        <div className="classSchedule text-center mt-2 border border-primary border-1  py-2 mt-3 mb-3   d-sm-flex align-items-sm-center justify-content-md-around justify-content-lg-start   ">
          <div className="d-sm-flex text-sm-start gap1 ps-2 ">
            <img src={img1} className="d-none d-sm-block " alt="" />
            <div>
              <p className="Bold mb-sm-0 ">
                Becoming a UX Designer from Scratch: Things to look out for
              </p>
              <p className="mb-sm-0">
                Emma Gannon, Author, Broadcaster{" "}
                <span className="d-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 clockicon "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="SemiBold"> 9 AM </span>
                </span>
              </p>
            </div>
          </div>
          <div className="">
            <button className="btn btn-primary">Start Class</button>
          </div>
        </div>

        <div className="Class_Assignments text-light mt-lg-3 ">
          <div className="Class_Assignments_wrap bgColor3 px-4 py-lg-5 ">
            <p className="SemiBold font18px">Assignments</p>

            <div className="d-flex justify-content-between px-2 ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 add-file"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font0rem">Add New</span>
              </div>
              <div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 search-Assignment-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="">
              <div className="py-3 ">
                <p> Today, 28th March, 2021</p>
                <div className="bg-light text-dark d-flex gap1  rounded-3 py-2 px-2 align-items-center mb-3">
                  <div className="d-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 d-block camera-icon bgColor7 rounded-3 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                  </div>

                  <div>
                    <p className="font0-75rem text-primary mb-0 w-100  ">
                      {" "}
                      New video has been uploaded
                    </p>
                    <p className="RubikFont mb-0">By Sorunke Sherif</p>
                  </div>
                </div>

                <div className="bg-light text-dark d-flex gap1  rounded-3 py-2 px-2 align-items-center mb-3">
                  <div className="d-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 d-block camera-icon bgColor7 rounded-3 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                  </div>

                  <div>
                    <p className="font0-75rem text-primary mb-0 w-100  ">
                      {" "}
                      Your tutor sent you a message
                    </p>
                    <p className="RubikFont mb-0">2:00 pm</p>
                  </div>
                </div>

                <div className="bg-light text-dark d-flex gap1  rounded-3 py-2 px-2 align-items-center mb-3">
                  <div className="d-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 d-block camera-icon bgColor7 rounded-3 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="font0-75rem text-primary mb-0 w-100  ">
                      {" "}
                      New Resources has been uploaded
                    </p>
                    <p className="RubikFont mb-0">By Sorunke Sherif</p>
                  </div>
                </div>
              </div>
              <div className="py-3 ">
                <p> Today, 28th March, 2021</p>
                <div className="bg-light text-dark d-flex gap1  rounded-3 py-2 px-2 align-items-center mb-3">
                  <div className="d-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 d-block camera-icon bgColor7 rounded-3 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                  </div>

                  <div>
                    <p className="font0-75rem text-primary mb-0 w-100  ">
                      {" "}
                      New video has been uploaded
                    </p>
                    <p className="RubikFont mb-0">By Sorunke Sherif</p>
                  </div>
                </div>

                <div className="bg-light text-dark d-flex gap1  rounded-3 py-2 px-2 align-items-center mb-3">
                  <div className="d-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 d-block camera-icon bgColor7 rounded-3 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                  </div>

                  <div>
                    <p className="font0-75rem text-primary mb-0 w-100  ">
                      {" "}
                      Your tutor sent you a message
                    </p>
                    <p className="RubikFont mb-0">2:00 pm</p>
                  </div>
                </div>

                <div className="bg-light text-dark d-flex gap1  rounded-3 py-2 px-2 align-items-center mb-3">
                  <div className="d-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 d-block camera-icon bgColor7 rounded-3 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="font0-75rem text-primary mb-0 w-100  ">
                      {" "}
                      New Resources has been uploaded
                    </p>
                    <p className="RubikFont mb-0">By Sorunke Sherif</p>
                  </div>
                </div>
              </div>

              <div className="py-3 ">
                <p> Today, 28th March, 2021</p>
                <div className="bg-light text-dark d-flex gap1  rounded-3 py-2 px-2 align-items-center mb-3">
                  <div className="d-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 d-block camera-icon bgColor7 rounded-3 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                  </div>

                  <div>
                    <p className="font0-75rem text-primary mb-0 w-100  ">
                      {" "}
                      New video has been uploaded
                    </p>
                    <p className="RubikFont mb-0">By Sorunke Sherif</p>
                  </div>
                </div>

                <div className="bg-light text-dark d-flex gap1  rounded-3 py-2 px-2 align-items-center mb-3">
                  <div className="d-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 d-block camera-icon bgColor7 rounded-3 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                  </div>

                  <div>
                    <p className="font0-75rem text-primary mb-0 w-100  ">
                      {" "}
                      Your tutor sent you a message
                    </p>
                    <p className="RubikFont mb-0">2:00 pm</p>
                  </div>
                </div>

                <div className="bg-light text-dark d-flex gap1  rounded-3 py-2 px-2 align-items-center mb-3">
                  <div className="d-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 d-block camera-icon bgColor7 rounded-3 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="font0-75rem text-primary mb-0 w-100  ">
                      {" "}
                      New Resources has been uploaded
                    </p>
                    <p className="RubikFont mb-0">By Sorunke Sherif</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentClass;
