import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { loginCall } from "../../apiCalls";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar";
import Reg from "../../Component/Reg";
import { useGlobalContext } from "../../context/AuthContext";

import "./login.css";

function Login() {
  const { urls, dispatch, isFetching } = useGlobalContext();

  const email = useRef();
  const password = useRef();
  const handleClick = (e) => {
    e.preventDefault();

    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <section>
      <Navbar />

      <div className="container-lg ">
        <div className="login_wrapper py-5">
          <div>
            <Reg />
          </div>

          <div className="login_div signUp_div">
            <p className="login_div_p1"> Welcome Back</p>
            <p>Let’s continue from where we stopped</p>
            <form action="" onSubmit={handleClick}>
              <div className="signUp_div_email_passowrd ">
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

              <Link to="/forget" className="login_forget">
                <p>Forgot Password?</p>
              </Link>
              <div className="login_div_sub">
                <button
                  className="btn  btn-primary"
                  type="submit"
                  onClick={handleClick}
                >
                  Login
                </button>
              </div>
            </form>
            <p className="text-center">
              {" "}
              Don’t have an account yet? Sign up here
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Login;
