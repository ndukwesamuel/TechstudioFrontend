import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux"; // this is becuse we want to call the global atate and use the reducer
import { toast } from "react-toastify";

import { register, reset } from "../../features/auth/authSlice";

import { useNavigate } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar";
import Reg from "../../Component/Reg";

import "./signUp.css";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user,  isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const first_name = useRef();
  const last_name = useRef();
  const email = useRef();
  const password = useRef();
  const phoneNumber = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(first_name.current.value);
    console.log(last_name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(phoneNumber.current.value);
    const userData = {
      email: email.current.value,
      password: password.current.value,
      first_name: first_name.current.value,
      phoneNumber: phoneNumber.current.value,
      last_name: last_name.current.value,
    };

    dispatch(register(userData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/login");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <section>
      <Navbar />

      <div className="container ">
        <div className="login_wrapper py-5">
          <div>
            <Reg />
          </div>

          <div className="login_div">
            <p className="login_div_p1">One last step, let’s get to know you</p>
            <p> Create an account with Us</p>

            <form action="" onSubmit={handleClick}>
              <div>
                <div className="login_div_form_username">
                  <div>
                    <label htmlFor="">First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name=""
                      id=""
                      ref={first_name}
                    />
                  </div>

                  <div>
                    <label htmlFor="">Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name=""
                      id=""
                      ref={last_name}
                    />
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
                      ref={phoneNumber}
                    />
                  </div>
                  <div>
                    <label htmlFor="">Time Schedule</label>
                    <select
                      class="form-select form-select-lg mb-3"
                      aria-label=".form-select-lg example"
                    >
                      <option value="1">Weekday class</option>
                      <option value="2">Weekend class</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="">Email Address</label>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="form-control"
                    ref={email}
                  />
                </div>

                <div>
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    name=""
                    id=""
                    className="form-control"
                    ref={password}
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
                <button
                  className="btn  btn-primary"
                  type="submit"
                  onClick={handleClick}
                >
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
