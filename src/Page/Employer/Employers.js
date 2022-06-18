import React from "react";

import "./employer.css";

import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer/Footer";

function Employers() {
  return (
    <section className="Employers">
      <div className="bgColor4">
        <Navbar />
        <div className="container-lg">
          <section className="Employers_Talent">
            <div className="Employers_Talent_wrapper text-center  d-md-flex text-md-start gap1 ">
              <div className="">
                <h1> Find the best talents to grow your team</h1>

                <p>
                  Techstudio is relied upon by a good amount of great companies
                  for finding competent talents. We mould our talents to fit
                  into their needed positions and your company culture.
                </p>
              </div>
              <div className="bgColor ">
                <form action="" className="py-md-2">
                  <div className="">
                    <input
                      className="form-control my-md-4"
                      type="text"
                      name=""
                      id=""
                      placeholder="What role are you trying to fill?"
                    />
                    <input
                      className="form-control my-md-2"
                      type="email"
                      name=""
                      id=""
                      placeholder="Your email"
                    />
                    <button className="btn  form-control btn-primary my-3">
                      Get Started
                    </button>
                  </div>
                </form>

                <img
                  className="img-fluid d-none"
                  src="assets/Icons/Tech Studio images/Repeat Grid 47.PNG"
                  alt=""
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="Employers_How_Techstudio_Works bgColor1">
        <div className="container-lg">
          <div className="Employers_How_Techstudio_Works_Wrap py-5">
            <h1 className="Bold font32px">How Techstudio works </h1>
            <p className="font22px">for employers</p>

            <div className="text-center d-md-flex gap1 text-md-start">
              <div className="bgColor4 py-3 rounded-3 my-3 px-4">
                <img
                  className="img-fluid  m-auto d-block  ms-lg-1"
                  src="assets/Icons/Tech Studio images/Group 25353.png"
                  alt=""
                />
                <p className="Bold font22px">Post a job</p>
                <p className="">
                  Create an account and a befitting profile to attract job
                  offers with ease. Your profile shows employers what makes you
                  the right fit.
                </p>
              </div>
              <div className="bgColor4 py-3 rounded-3 my-3 px-4">
                <img
                  className="img-fluid  m-auto d-block  ms-lg-1"
                  src="assets/Icons/Tech Studio images/Black Businessman-6.png"
                  alt=""
                />
                <p className="Bold font22px">Review & shortlist</p>
                <p className="">
                  Create a position on Hired and specify the skills and
                  experience you’re looking for.
                </p>
              </div>

              <div className="bgColor4 py-3 rounded-3 my-3 px-4">
                <img
                  className="img-fluid  m-auto d-block ms-lg-1"
                  src="assets/Icons/Tech Studio images/Group 25354.png"
                  alt=""
                />
                <p className="Bold font22px">Interview & hire</p>
                <p className="">
                  Create an account and a befitting profile to attract job
                  offers with ease. Your profile shows employers what makes you
                  the right fit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Employers_InDemand_Role bgColor4">
        <div className="container-lg">
          <div className=" py-5">
            <h1 className="Bold font32px">Hire to fill</h1>

            <p className="Bold font32px"> the most in-demand roles</p>

            <div className="Employers_ListOf_Role text-center mt-5 d-md-flex flex-md-wrap gap1 text-md-start">
              <div className="">
                <img
                  className="img-fluid "
                  src="assets/Icons/Tech Studio images/noun_Designer_1469595.png"
                  alt=""
                />
                <p className="">Software Engineers</p>
                <p className="">
                  Learn the user experience, client management, technical, and
                  practical skills you need to launch a career as a user
                  experience (UX) or user interface (UI) designer.
                </p>
              </div>

              <div className="">
                <img
                  className="img-fluid "
                  src="assets/Icons/Tech Studio images/noun_Ui and Ux_907062.png"
                  alt=""
                />
                <p className="">Front-end Developers</p>
                <p className="">
                  Learn the user experience, client management, technical, and
                  practical skills you need to launch a career as a user
                  experience (UX) or user interface (UI) designer.
                </p>
              </div>

              <div className="">
                <img
                  className="img-fluid "
                  src="assets/Icons/Tech Studio images/noun_coding_3152169.png"
                  alt=""
                />
                <p className="">UI/UX Designers</p>
                <p className="">
                  Learn the user experience, client management, technical, and
                  practical skills you need to launch a career as a user
                  experience (UX) or user interface (UI) designer.
                </p>
              </div>

              <div className="">
                <img
                  className="img-fluid "
                  src="assets/Icons/Tech Studio images/Group 182.png"
                  alt=""
                />
                <p className="">Back-end Developers</p>
                <p className="">
                  Learn the user experience, client management, technical, and
                  practical skills you need to launch a career as a user
                  experience (UX) or user interface (UI) designer.
                </p>
              </div>

              <div className="">
                <img
                  className="img-fluid "
                  src="assets/Icons/Tech Studio images/noun_data science_2475093.png"
                  alt=""
                />
                <p className="">Graphics Designers</p>
                <p className="">
                  Learn the user experience, client management, technical, and
                  practical skills you need to launch a career as a user
                  experience (UX) or user interface (UI) designer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" Employers_Help_Hire bgColor">
        <div className="container-lg">
          <div className="Employers_Help_Hire_wrap py-5 d-md-flex  justify-content-md-center gap1 ">
            <div className="text-center text-md-start ">
              <h1 className="SemiBold  Color1 font40px ">
                Let's help you hire
              </h1>

              <p>
                Let our team of recruitment experts find the right talents fit
                for you. Based on your requirements, we will shorlist talents
                with matching skills and help you schedule interviews with them.
                We will assist you every step of the way.
              </p>
            </div>
            <div className="Employers_Help_Hire_form  ">
              <form action="" className="bgColor4  py-4 px-4">
                <div className="">
                  <input
                    className="form-control mb-3"
                    type="text"
                    name=""
                    id=""
                    placeholder="Your Name"
                  />
                  <input
                    className="form-control mb-3"
                    type="text"
                    name=""
                    id=""
                    placeholder="Company Name"
                  />
                  <input
                    className="form-control mb-3"
                    type="email"
                    name=""
                    id=""
                    placeholder="Company Email"
                  />

                  <input
                    className="form-control mb-3"
                    type="text"
                    name=""
                    id=""
                    placeholder="What role do you want to fill?"
                  />
                  <button className="btn btn-primary  form-control">
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
}

export default Employers;
