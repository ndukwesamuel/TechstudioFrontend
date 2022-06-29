import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar";
import { useSelector, useDispatch } from "react-redux";

import Reg from "../../Component/Reg";
import { login, reset } from "../../features/auth/authSlice";

import "./login.css";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/DashboardHome");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const email = useRef();
  const password = useRef();
  const handleClick = (e) => {
    e.preventDefault();

    const userData = {
      email: email.current.value,
      password: password.current.value,
    };

    console.log(userData);
    dispatch(login(userData));
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
