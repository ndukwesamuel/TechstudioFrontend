import React from "react";

import "./Footer.css";
function Footer() {
  return (
    <div className="main_foot">
      <section className="footer">
        <div className="footer_one">
          <img className="" src="/assets/images/logo.svg" alt="" />
          <p>Techstudio Academy</p>
        </div>
        <div className="footer_two">
          <p>Courses</p>
          <div>
            <p>Front End Development </p>
            <p> Android Development</p>
            <p> UI/UX Design</p>
            <p> Back end development</p>
          </div>
        </div>
        <div>
          <p> About Us</p>
          <p> Contact</p>
        </div>
        <div>
          <p>Subscribe to our newsletter</p>
          <form action="">
            <div className="footer_form">
              <input type="email" name="" id="" placeholder="Email Address" />
              <img
                className="footer_form_img"
                src="/assets/images/arrow.png"
                alt=""
              />
              <button className="footer_form_btn btn btn-primary">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      <div className="fotter_policy">
        <hr className="footer_hr" />
        <div className="term_div">
          <p> Terms and Policy</p>
          <img src="/assets/images/facebook.svg" alt="" />
          <img src="/assets/images/twitter.svg" alt="" />
          <img src="/assets/images/linkedin-alt.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
