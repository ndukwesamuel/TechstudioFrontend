import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img
              className="nav_logo_icon"
              src="/assets/images/logo.svg"
              alt=""
            />
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  to="/about"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  About
                </Link>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="rr"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="u">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Employers
                </a>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>

            <div class="d-flex  ">
              <Link to="/login">
                <button class=" btn btn-primary" type="submit">
                  Sign In
                </button>
              </Link>
              <Link to="/signup ">
                <button class="sign btn " type="submit">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
