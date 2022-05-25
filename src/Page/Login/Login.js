import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar";
import Reg from "../../Component/Reg";

import "./login.css";

function Login() {
  return (
    <section>
      <Navbar />

      <div className="container ">
        <div className="login_wrapper">
          <div>
            <Reg />
          </div>

          <div className="login_div signUp_div">
            <p className="login_div_p1"> Welcome Back</p>
            <p>Let’s continue from where we stopped</p>
            <form action="">
              <div className="signUp_div_email_passowrd ">
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

              <Link to="/forget" className="login_forget">
                <p>Forgot Password?</p>
              </Link>
              <div className="login_div_sub">
                <button className="btn  btn-primary" type="submit">
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
