import React, { useState, useRef, useEffect } from "react";
import {
  Link,
  Navigate,
  unstable_HistoryRouter,
  useNavigate,
} from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux"; // this is becuse we want to call the global atate and use the reducer

import { logout, reset } from "../features/auth/authSlice";

let data = "nav-link  ";

const Navbar = ({ white_nav }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // const oncc = () => {
  //   localStorage.removeItem("user");
  //   window.location.reload();
  // };

  const onLogout = () => {
    // localStorage.removeItem("user");
    dispatch(logout());
    dispatch(reset());
    navigate("/");

    // localStorage.removeItem("user");
  };
  useEffect(() => {
    // if (!user) {
    //   navigate("/login");
    // }

    return () => {};
  }, []);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className="nav_logo_icon"
              src="/assets/images/logo.svg"
              alt=""
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/about"
                  // className="nav-link active"
                  className={white_nav ? "text-white nav-link" : "nav-link "}
                  aria-current="page"
                  href="#"
                >
                  About
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  // className="nav-link dropdown-toggle"
                  className={
                    white_nav
                      ? "text-white nav-link dropdown-toggle"
                      : "nav-link dropdown-toggle"
                  }
                  href="rr"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="text-decoration-none " to="/uiux">
                    <li className="dropdown-item text-white">Ui/UX Design</li>
                  </Link>

                  <Link to="/datascience" className="text-decoration-none">
                    <li className="dropdown-item text-white">Data Sceince</li>
                  </Link>

                  <Link to="/frontend" className="text-decoration-none">
                    <li className="dropdown-item text-white">Frontend</li>
                  </Link>

                  <Link to="/fullstack" className="text-decoration-none">
                    <li className="dropdown-item text-white">Full Stack</li>
                  </Link>

                  <Link to="/mobile" className="text-decoration-none">
                    <li className="dropdown-item text-white">
                      Mobile Development
                    </li>
                  </Link>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  to="/employer"
                  className={white_nav ? "text-white nav-link" : "nav-link "}
                  aria-current="page"
                >
                  Employers
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={white_nav ? "text-white nav-link" : "nav-link "}
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className="d-flex  ">
              {user ? (
                <button className=" btn btn-primary" onClick={onLogout}>
                  logout
                </button>
              ) : (
                <>
                  <Link to="/login">
                    <button className=" btn btn-primary" type="submit">
                      Sign In
                    </button>
                  </Link>
                  <Link to="/signup ">
                    <button
                      className={
                        white_nav ? "text-white sign btn" : "sign btn "
                      }
                      type="submit"
                    >
                      Sign up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
