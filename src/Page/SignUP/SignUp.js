import React from "react";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar";
import Reg from "../../Component/Reg";

import "./signUp.css";

function SignUp() {
  return (
    <section>
      <Navbar />

      <div className="container ">
        <div className="login_wrapper">
          <div>
            <Reg />
          </div>

          <div className="login_div">
            <p className="login_div_p1">
              {" "}
              One last step, let’s get to know you
            </p>
            <p> Create an account with Us</p>

            <form action="">
              <div>
                <div className="login_div_form_username">
                  <div>
                    <label htmlFor="">First Name</label>
                    <input className="form-control" type="text" name="" id="" />
                  </div>

                  <div>
                    <label htmlFor="">Last Name</label>
                    <input className="form-control" type="text" name="" id="" />
                  </div>
                </div>

                <div className="login_div_time_shedule">
                  <div>
                    <label htmlFor="">Your Phone Number</label>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      id=""
                    />
                  </div>

                  <div>
                    <label htmlFor="">Time Schedule</label>
                    <select
                      class="form-select form-select-lg mb-3"
                      aria-label=".form-select-lg example"
                    >
                      <option value="1">Weekend class</option>
                      <option value="2">Two</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="">Email Address</label>
                  <input type="email" name="" id="" className="form-control" />
                </div>

                <div>
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    name=""
                    id=""
                    className="form-control"
                  />
                </div>
              </div>

              <div className="">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="login_div_radio_input" htmlFor="">
                  Send me alerts and Weekly Newsletters
                </label>
              </div>

              <div className="login_div_sub">
                <button className="btn  btn-primary" type="submit">
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default SignUp;
