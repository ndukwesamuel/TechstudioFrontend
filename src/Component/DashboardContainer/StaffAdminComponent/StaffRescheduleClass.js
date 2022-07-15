import React from "react";

function StaffRescheduleClass() {
  return (
    <div className="bgColor4">
      <div className="ms-lg-3">
        <p className="text-primary mb-1">Today, 28th March, 2021</p>

        <p className="font18px SemiBold "> Design Process</p>
        <p>
          The course is highly interactive with projects, Checklists &
          actionable lectures built into…
        </p>
        <div className="ms-5  ms-lg-0">
          <div className="d-flex gap1 mb-1 mb-lg-4">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6  w1"
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
            </div>
            <div>
              <p className="mb-0 Bold">55 mins</p>
              <p className="mb-0">Time</p>
            </div>
          </div>

          <div className="d-flex gap1 mb-1 mb-lg-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 w1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="mb-0 Bold">17 Jan, 2021</p>
              <p className="mb-0">Duration</p>
            </div>
          </div>

          <div className="d-flex gap1 mb-1 mb-lg-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 w1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="mb-0 Bold">Live Class</p>
              <p className="mb-0">Class Type</p>
            </div>
          </div>
        </div>

        <div className="d-flex   ">
          <div className="staff-shedule-class-participants ">
            <img
              src="https://e0.365dm.com/22/05/1600x900/skysports-cristiano-ronaldo_5778908.jpg?20220521151321"
              alt=""
              className="img-fluid lesson-joined-user"
            />

            <img
              src="https://e0.365dm.com/22/05/1600x900/skysports-cristiano-ronaldo_5778908.jpg?20220521151321"
              alt=""
              className="img-fluid lesson-joined-user"
            />

            <img
              src="https://e0.365dm.com/22/05/1600x900/skysports-cristiano-ronaldo_5778908.jpg?20220521151321"
              alt=""
              className="img-fluid lesson-joined-user"
            />
          </div>
          <p className="font-14px">+30 joined the class:</p>
        </div>
      </div>

      <hr className="ms-0" />
      <div className="text-center mt-0 mb-1">
        <button className="btn btn-primary w-50 ">Reschedule</button>
      </div>
    </div>
  );
}

export default StaffRescheduleClass;
