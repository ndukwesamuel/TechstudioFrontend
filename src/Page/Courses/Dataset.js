import React from "react";

import img1 from "../../media/Group 25213.png";
import img2 from "../../media/Group 25214.png";

import img3 from "../../media/Group 25215.png";

import front from "../../media/front.PNG";
import z from "../../media/z.PNG";

import "./dataset.css";
import GetStarted from "../../Component/GetStarted";

function Dataset({
  data_img1,
  data_head,
  data_head_sub,
  data_process_1,
  data_process_2,
  data_process_3,
}) {
  return (
    <section>
      <div className="">
        <section className="section_one">
          <section className="section_one_wrapper">
            <div className="section_one_wrapper_div1">
              <h1> {data_head}</h1>

              <p>{data_head_sub}</p>
            </div>
            <div className="section_one_wrapper_div2">
              <div className="one">
                <div>
                  <img
                    className="img-fluid section_one_wrapper_div2_img"
                    src={data_img1}
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="section_two">
          <div className="section_two_wrapper">
            <h1 className="section_two_wrapper_h1"> Our Process</h1>

            <div className="section_two_wrapper_flex">
              <div className="section_two_wrapper_flex_one">
                <div className="section_two_wrapper_flex_one_div">
                  <img
                    className="img-fluid section_two_wrapper_flex_one_img "
                    src={img1}
                    alt=""
                  />
                  <div className="section_two_wrapper_flex_one_div2">01</div>
                </div>

                <p className="section_two_wrapper_flex_one_p">
                  {data_process_1}
                </p>
              </div>

              <div className="section_two_wrapper_flex_two">
                <div className="section_two_wrapper_flex_two_div">
                  <img
                    className="img-fluid section_two_wrapper_flex_two_img "
                    src={img2}
                    alt=""
                  />
                  <div className="section_two_wrapper_flex_two_div2">02</div>
                </div>

                <p className="section_two_wrapper_flex_two_p">
                  {data_process_2}
                </p>
              </div>

              <div className="section_two_wrapper_flex_two">
                <div className="section_two_wrapper_flex_two_div">
                  <img
                    className="img-fluid section_two_wrapper_flex_two_img "
                    src={img3}
                    alt=""
                  />
                  <div className="section_two_wrapper_flex_two_div2">03</div>
                </div>

                <p className="section_two_wrapper_flex_two_p">
                  {data_process_3}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div>
          <GetStarted />
        </div>
        {/* 
        <section className="Dataset_section_three">
          <div className="Dataset_section_three_wrap">
            <h1> What you will learn</h1>

            <div className="Dataset_learn_div_wrap">
              <div className="Dataset_learn_div_wrap_divs one">
                <div>
                  <img className="img-fluid" src={z} alt="" />
                  <p>Fundamentals</p>
                </div>

                <p>
                  The first phase of this bootcamp is to help you appreciate the
                  fundamentals of web development, understanding structure,
                  design and getting comfortable coding in HTML, CSS and Sass.
                </p>
              </div>

              <div className="Dataset_learn_div_wrap_divs two">
                <div>
                  <img className="img-fluid" src={z} alt="" />
                  <p>Using Boostrap</p>
                </div>

                <p>
                  You’ll learn speedup your development and layout mobile-ready
                  webpages using the most popular CSS Framework - Boostrap 4.
                  You’ll understand how to automatically create responsive
                  websites that render perfectly on all display platforms.
                </p>
              </div>

              <div className="Dataset_learn_div_wrap_divs three">
                <div>
                  <img className="img-fluid" src={z} alt="" />
                  <p>JavaScript Basics</p>
                </div>

                <p>
                  You’ll learn speedup your development and layout mobile-ready
                  webpages using the most popular CSS Framework - Boostrap 4.
                  You’ll understand how to automatically create responsive
                  websites that render perfectly on all display platforms.
                </p>
              </div>

              <div className="Dataset_learn_div_wrap_divs four">
                <div>
                  <img className="img-fluid" src={z} alt="" />
                  <p>JavaScript and the DOM</p>
                </div>

                <p>
                  You’ll learn speedup your development and layout mobile-ready
                  webpages using the most popular CSS Framework - Boostrap 4.
                  You’ll understand how to automatically create responsive
                  websites that render perfectly on all display platforms.
                </p>
              </div>

              <div className="Dataset_learn_div_wrap_divs four">
                <div>
                  <img className="img-fluid" src={z} alt="" />
                  <p>Object-Oriented JavaScript</p>
                </div>

                <p>
                  You’ll learn to build real-life applications using
                  object-oriented JavaScript techniques. You’ll also learn the
                  major improvements of JavaScript in the form of ES6.
                </p>
              </div>

              <div className="Dataset_learn_div_wrap_divs five">
                <div>
                  <img className="img-fluid" src={z} alt="" />
                  <p>React Library</p>
                </div>

                <p>
                  You’ll be introduced to the most popular JavaScript library -
                  the REACT library. You’ll learn to build a React application
                  from scratch, utilizing the react components to manage the
                  user interface.
                </p>
              </div>

              <div className="Dataset_learn_div_wrap_divs six">
                <div>
                  <img className="img-fluid" src={z} alt="" />
                  <p>Developer Tools & Testing</p>
                </div>

                <p>
                  You’ll be introduced to the Chrome Developers’ Tool and how to
                  use it to debug and maintain your application. Learn to use
                  testing to help build app features.
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </section>
  );
}

export default Dataset;
