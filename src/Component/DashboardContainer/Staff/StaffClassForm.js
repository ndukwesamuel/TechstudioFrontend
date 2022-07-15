import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./StaffClassForm.css";

function StaffClassForm() {
  const { user, isStaff, Admin } = useSelector((state) => state.auth);

  const [sch, setSch] = useState(false);

  const lesson = () => {
    setSch(true);
  };
  const form = () => {
    setSch(false);
  };
  return (
    <>
      <div className="w-100 bgColor4">
        <div className="mt-5 pt-5  mt-sm-0  ">
          <div className="d-flex ps-2 gap1 mb-2 ">
            <h1 className="font24px Color Bold  ms-md-5" onClick={form}>
              Create Class
            </h1>
            {Admin && (
              <button className="btn btn-primary " onClick={lesson}>
                Schedule a lesson
              </button>
            )}
          </div>

          <p className="font1rem regular ps-2  ms-md-5">
            <small>isStaff</small>
            Set new time and date for the scheduled class.
          </p>

          {sch ? (
            <div className="d-lg-flex  schedule-lesson w-100 align-items-lg-start px-lg-5 mt-lg-5">
              <form
                action=""
                method="post"
                className="d-flex flex-column justify-content-center gap1 px-2"
              >
                <div className="d-flex   gap1">
                  <label htmlFor="">Topic</label>
                  <div className="width-75 width-md-75 ms-md-5 ms-5">
                    <input
                      type="text"
                      className="form-control w-100"
                      name=""
                      id=""
                      placeholder="Placeholder Text "
                    />
                  </div>
                </div>

                <div className="d-flex gap1">
                  <label htmlFor="">Date</label>
                  <div className=" width-75 width-md-75 ms-md-5 ms-5">
                    <input
                      type="date"
                      className="form-control w-100"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className="d-flex gap1">
                  <label htmlFor="">Resources</label>
                  <div className="width-75 ms-2 width-md-75 ms-md-2">
                    <input
                      type="file"
                      className="form-control "
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className="d-flex gap1">
                  <label htmlFor="">Time</label>
                  <div className=" width-75 width-md-75 ms-md-5 ms-5">
                    <input
                      type="time"
                      className="form-control "
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className="d-flex gap1 justify-content-center">
                  <button className="btn btn-primary ">Submit</button>
                  <button className="btn bgColor1">Cancle</button>
                </div>
              </form>

              <div className="bgColor3 px-sm-5">
                <div className="bgColor3 text-white mt-5 pt-4 mt-lg-0">
                  <div className="bgColor8 start-class-title Color ps-5  position-relative py-2 me-3 ms-5 width-md-75  ms-lg-0 width-md-75 width-lg mt-lg-0 pe-lg-2">
                    <img
                      src="https://e0.365dm.com/22/05/1600x900/skysports-cristiano-ronaldo_5778908.jpg?20220521151321"
                      alt=""
                      className="img-fluid d-block position-absolute"
                    />
                    <p className="">
                      Becoming a UX Designer from Scratch: Things to look out
                      for
                    </p>

                    <p>Emma Gannon, Author, Broadcaster</p>
                  </div>

                  <div className="d-flex flex-row text-center  gap1 justify-content-center mt-2 my-lg-3">
                    <p className="mb-0 font-14px">Participants:</p>
                    <div className="d-flex justify-content-center  ">
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

                  <div className="text-center mt-4 pb-2 pb-lg-5">
                    <button className="btn btn-primary w-50 mt-lg-5">
                      Start
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <form
                action=""
                method="post"
                className="d-flex flex-column justify-content-center gap1 px-1 ms-md-5 width-lg-75 width-x-50  "
              >
                <div className="d-flex justify-content-between  gap1">
                  <label htmlFor="">Topic</label>
                  <div className="width-75 width-md-75 ms-md-5 ms-3">
                    <input
                      type="text"
                      className="form-control w-100"
                      name=""
                      id=""
                      placeholder="Placeholder Text"
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-between  gap1">
                  <label htmlFor="">Date</label>
                  <div className="width-75 width-md-75 ms-md-5 ms-3">
                    <input
                      type="date"
                      className="form-control w-100"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                {/* <div className="d-flex gap0"> */}
                <div className="d-flex justify-content-between  gap1 justify-content-sm-start ">
                  <label htmlFor="">Preference</label>
                  <div className="d-flex   gap0 ms-sm-5  ">
                    <div class="form-check ms-md-5">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="Preference"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Online
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="Preference"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Offline
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="Preference"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Both
                      </label>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between  ">
                  <label htmlFor="">Resources</label>
                  <div className="width-75 ms-2 width-md-75 ms-md-2">
                    <input
                      type="file"
                      className="form-control "
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className="d-flex flex-column flex-md-row gap1 align-items-center justify-content-md-between">
                  <label htmlFor="">About Course</label>
                  <textarea
                    name=""
                    id=""
                    className="form-control width-md-75"
                    cols="30"
                    rows="10"
                  >
                    Placeholder Text
                  </textarea>
                </div>

                <div className="d-flex flex-column flex-md-row gap1 align-items-center justify-content-md-between">
                  <label htmlFor="">About Course</label>
                  <textarea
                    name=""
                    id=""
                    className="form-control width-md-75"
                    cols="30"
                    rows="10"
                  >
                    Placeholder Text
                  </textarea>
                </div>

                <div className="d-flex gap1 justify-content-center">
                  <button className="btn btn-primary ">Submit</button>
                  <button className="btn bgColor1">Cancle</button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default StaffClassForm;
