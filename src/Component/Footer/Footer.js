import React from "react";

import "./Footer.css";
function Footer() {
  return (
    <section className="footer">
      <div className="footer_one">
        <img className="" src="/assets/images/logo.svg" alt="" />
        <p>Techstudio Academy</p>
      </div>
      <div>
        <p>Courses</p>
        <div>
          <p>Front End Development </p>
          <p> Android Development</p>
          <p> UI/UX Design Back</p>
          <p> end development</p>
        </div>
      </div>
      <div>
        <p> About Us</p>
        <p> Contact</p>
      </div>
      <div>
        <p>Subscribe to our newsletter</p>
        <form action="">
          <div>
            <input type="email" name="" id="" placeholder="Email Address" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Footer;
