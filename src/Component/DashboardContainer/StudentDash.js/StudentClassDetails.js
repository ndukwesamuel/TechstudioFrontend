import React, { useState } from "react";

import "./StudentClassDetails.css";

function StudentClassDetails() {
  const [about, setAbout] = useState(true);
  const [discussions, setDiscussions] = useState(false);
  const [resources, setResources] = useState(false);

  const handleAboutCourse = () => {
    console.log("working");
    setAbout(true);
    setDiscussions(false);
    setResources(false);
  };
  const handleDiscussions = () => {
    console.log("handleDiscussions");
    setAbout(false);
    setDiscussions(true);
    setResources(false);
  };
  const handleResources = () => {
    console.log("handleResources");
    setAbout(false);
    setDiscussions(false);
    setResources(true);
  };
  return (
    <div className="w-100">
      <div className="StudentClassDetailsWrap  pt-5 mt-5 text-center  mt-sm-0 text-md-start ">
        <p className="Bold Color ps-md-5">
          Becoming a UX Designer from Scratch: Things to look out for
        </p>
        <p className="px-2 mb-0 ps-md-5">
          Emma Gannon, Author, Broadcaster, Podcast Host
        </p>
        <p className="ps-md-5">30 mins</p>

        <div className="container-xxl">
          <div className="row">
            <div className="col-sm-6 col-md-8 col-lg-8 ">
              <video
                controls
                className="img-fluid  rounded-3 d-block  StudentClassDetails-mainVideo w-100"
              >
                <source
                  src="https://res.cloudinary.com/dkzds0azx/video/upload/v1655712140/AMEN_AMEN-_Sinmidele_and_Ore_Macaulay_dl5njj.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="text-start ps-3 StudentClassDetails-relate">
                <p className="mb-1"> Related Videos</p>
                <div className="d-flex flex-wrap gap1 ">
                  <div className="d-flex  gap1  flex-sm-column  flex-lg-row">
                    <video controls className="img-fluid related-video">
                      <source
                        src="https://res.cloudinary.com/dkzds0azx/video/upload/v1655712140/AMEN_AMEN-_Sinmidele_and_Ore_Macaulay_dl5njj.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <div className="mt-2">
                      <p className=" mb-0 font0-75rem SemiBold Color">
                        Theory of User Experience
                      </p>
                      <p className="mb-0">Oluwaseyi Sola</p>
                      <p>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 time-svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="ms-2">10 mins</span>
                      </p>
                    </div>
                  </div>

                  <div className="d-flex  gap1  flex-sm-column flex-lg-row">
                    <video controls className="img-fluid related-video">
                      <source
                        src="https://res.cloudinary.com/dkzds0azx/video/upload/v1655712140/AMEN_AMEN-_Sinmidele_and_Ore_Macaulay_dl5njj.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <div className="mt-2">
                      <p className=" mb-0 font0-75rem SemiBold Color">
                        Theory of User Experience
                      </p>
                      <p className="mb-0">Oluwaseyi Sola</p>
                      <p>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 time-svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="ms-2">10 mins</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex mt-5 text-start ps-2 flex-sm-row justify-content-around Admin-stack-nav ms-md-2 mt-md-5 ps-md-0">
          <span
            className="me-md-2 Regular font1rem"
            onClick={handleAboutCourse}
          >
            About Course
          </span>
          <span
            className="me-md-2 Regular font1rem"
            onClick={handleDiscussions}
          >
            Discussions
          </span>
          <span className="me-md-2 Regular font1rem" onClick={handleResources}>
            Resources
          </span>
        </div>
        <hr className="my-0" />

        <div className="">
          {about && (
            <div className="text-start ps-2 px-sm-3 StudentClassDetails-about">
              <h2 className="font22px mt-5 ">About Course </h2>
              <p>
                Dream of finally finishing that draft or launching that
                side-hustle? Make your next creative project your best yet, with
                simple steps from creative superstar Emma Gannon! In this new
                class, Emma shares the framework that allowed her to overcome
                self-doubt and carve her own path as an author, broadcaster, and
                podcast host. The secret to her success? Fed up with feeling
                afraid—of failure, of not being good enough, even of
                success—Emma dug into the science behind self-sabotage and
                learned exactly how to get out of her own way. Now, Emma is
                sharing what she’s learned so that you can do the same: unlock
                your creative potential while feeling energized and empowered!
              </p>
            </div>
          )}

          {discussions && (
            <div className="text-start ps-2 px-sm-3 StudentClassDetails-discussions ps-lg-5">
              <h2 className="font22px ">Discussions </h2>

              <div className="d-flex align-items-center ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 user-comment-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <textarea
                  name=""
                  id=""
                  className="form-control me-2"
                ></textarea>
              </div>

              <div className="d-flex mt-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 user-comment-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div className="pe-3">
                  <p className="Bold mt-2">Emerald B.</p>
                  <p>
                    So, where can I practise doing the name card? Is it Adobe
                    Illustrator? My trial has ended. Any other recommended
                    platform for practising?
                  </p>

                  <textarea
                    name=""
                    id=""
                    className="form-control "
                    placeholder="Leave a reply"
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          {resources && (
            <div className="text-start ps-2 px-sm-3  d-lg-flex">
              <div className="StudentClassDetails_Resource">
                <h2 className="font22px ">Project Description </h2>
                <p>Redesign your business card</p>

                <div>
                  <h2>Assignment</h2>
                  <p>
                    Redesign your business card. Just like in the lessons,
                    create some content (just write it out—that’s how you
                    start!) and then create a structure based on what you want
                    to emphasize. Gradually add more structure and contrast to
                    the design, and see where it takes you. Experiment with
                    literary typefaces, slabs, and custom type. Make the
                    letterforms your own, have some fun, and enjoy the explosion
                    of joy that graphic design can bring to your work.
                  </p>
                </div>

                <div>
                  <h2>Deliverable</h2>
                  <p>
                    Upload a business card and share a bit about your design
                    decisions. A completed project may include:
                  </p>
                  <p>
                    4 designs playing with structure (student example) 1 design
                    using a literary typeface 1 design using a slab face
                  </p>
                </div>
              </div>

              <div className="mt-3 StudentClassDetails-sub-assignment">
                <p className="Bold font22px">Resources</p>
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

                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  Submit Assignment
                </button>

                <div className="Class_Assignments_offcanva">
                  <div
                    class="offcanvas offcanvas-end "
                    tabindex="-1"
                    id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel"
                  >
                    <div class="offcanvas-header">
                      <h5
                        class="offcanvas-title text-dark Bold font18px"
                        id="offcanvasExampleLabel"
                      >
                        Submit Assignment
                      </h5>

                      <button
                        type="button"
                        class="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="offcanvas-body">
                      <div className="text-dark ">
                        <p className="SemiBold">Fundamentals of Design</p>
                        <p className="Regular">Description</p>
                        <div>
                          <textarea
                            class="form-control "
                            placeholder="Leave a comment here"
                            id="floatingTextarea"
                          ></textarea>
                        </div>
                        <div>
                          <p> Attachments</p>
                          <div>
                            Browse files or drag and drop here{" "}
                            <button className="btn btn-primary">Addfile</button>
                          </div>

                          <div className="yy">
                            <button className="btn btn-primary me-3">
                              {" "}
                              Submit
                            </button>
                            <button className="btn btn-light"> Cancle</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentClassDetails;
