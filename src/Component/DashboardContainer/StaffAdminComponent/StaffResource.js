import React, { useState } from "react";
import { useSelector } from "react-redux";
import StaffUploadNewFile from "../Staff/StaffUploadNewFile";

function StaffResource() {
  const { user, isStaff, Admin } = useSelector((state) => state.auth);

  const [nav3, setNav3] = useState(false);
  const [nav1, setNav1] = useState(true);
  const [nav2, setNav2] = useState(false);

  const activeNav1 = () => {
    setNav1(true);
    setNav2(false);
    setNav3(false);
  };

  const activeNav2 = () => {
    setNav1(false);
    setNav2(true);
    setNav3(false);
  };

  const activeNav3 = () => {
    setNav1(false);
    setNav2(false);
    setNav3(true);
  };
  return (
    <div className="bgColor4 text-start px-3 py-3 w-100">
      <div className="d-flex justify-content-between gap1 align-items-center">
        <p className="font18px SemiBold">Resources</p>
        <p
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#UploadNewfile"
          className=" SemiBold text-primary font-14px align-items-center text-decoration-underline"
        >
          Upload New file
        </p>
      </div>

      <StaffUploadNewFile />

      <div className="p-1  width-75 d-flex bgColor6 gap1 align-items-center justify-content-between">
        <span
          className={nav1 ? "btn btn-light w-50" : " "}
          onClick={activeNav1}
        >
          PDF
        </span>

        <span
          className={nav2 ? "btn btn-light w-50" : " "}
          onClick={activeNav2}
        >
          VIDEO
        </span>

        <span
          className={nav3 ? "btn btn-light w-50" : " "}
          onClick={activeNav3}
        >
          AUDIO
        </span>
      </div>

      {nav1 ? (
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
      ) : (
        <h1> Nothing for Now</h1>
      )}
    </div>
  );
}

export default StaffResource;
