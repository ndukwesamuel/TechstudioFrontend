import React from "react";
import Footer from "../Component/Footer/Footer";
import GetStarted from "../Component/GetStarted";
import Navbar from "../Component/Navbar";
import "./About.css";

import about_img from "../media/About_icon.PNG";
function About() {
  return (
    <div>
      <Navbar />
      <section className="container">
        <div class="About_sec_one">
          <div class="row">
            <div class="col-md-6">
              <div className="About_sec_one_left">
                <p> KNOW US MORE</p>
                <h2> About Techstudio</h2>
                <p>
                  Techstudio is an academy focused putting youth and adult on
                  track in the tech world. Our systems designed to inspire
                  focused learning, creativity and collaboration.Our space is
                  equipped with state-of-the-art learning equipments with no
                  more than 10 students per class.
                </p>
                <p>
                  Learn in an environment that puts you in direct contact with
                  professional web developers and software engineer.
                </p>{" "}
                <p>
                  {" "}
                  You’ll be provided with constant power and internet supply to
                  make you focus on the job at hand
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div className="About_sec_one_right">
                <img className="img-fluid " src={about_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="About_sec_two container">
          <img
            className="img-fluid rounded-2"
            src="/assets/images/About_icon2.jpg"
            alt=""
          />
          <img
            className="img-fluid rounded-2"
            src="/assets/images/About_icon3.jpg"
            alt=""
          />

          <img
            className="img-fluid rounded-2"
            src="/assets/images/About_icon4.jpg"
            alt=""
          />

          <img
            className="img-fluid rounded-2"
            src="/assets/images/About_icon5.jpg"
            alt=""
          />
        </section>
      </div>

      <div className="container">
        <section className="About_sec_three ">
          <div className="About_sec_three_div1">
            <h2 className="About_sec_three_h2">Driven by our core values</h2>
            <p cls>
              We do the things we do out of love for growth, progress and change
              oil the tech space
            </p>
          </div>

          <div className="About_sec_three_core">
            <div className="About_sec_three_core_wraper">
              <div className="About_sec_three_core_wraper_sec1">
                <img
                  src="assets\Icons\Tech Studio images\clock (4).png"
                  alt=""
                  className=""
                />
                <p>Flexibility</p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>

              <div className="About_sec_three_core_wraper_sec2">
                <img
                  src="assets\Icons\Tech Studio images\noun_workspace.png"
                  alt=""
                />
                <p>Condusive Environment</p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>

              <div className="About_sec_three_core_wraper_sec3">
                <img
                  src="assets\Icons\Tech Studio images\money-bag.png"
                  alt=""
                  className=""
                />
                <p>Affordable tuition fees</p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>
            </div>

            <div className="About_sec_three_core_wraper">
              <div className="About_sec_three_core_wraper_sec1">
                <img
                  src="assets\Icons\Tech Studio images\noun_Learning.png"
                  alt=""
                  className=""
                />
                <p>Learning & Development</p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>
              <div className="About_sec_three_core_wraper_sec2">
                <img
                  src="assets\Icons\Tech Studio images\noun_colleague.png"
                  alt=""
                />
                <p>Great Colleaggues</p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>

              <div className="About_sec_three_core_wraper_sec3">
                <img
                  src="assets\Icons\Tech Studio images\Insurance.png"
                  alt=""
                />
                <p>Certificates</p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container">
        <section className="About_sec_four">
          <h1> Meet the team</h1>
          <div className="About_sec_four_sec1">
            <div className="About_sec_four_sec1_inner1">
              <img
                className="img-fluid ceo_img"
                src="assets\images\ceo1.jpg"
                alt=""
              />
              <p> John Boyega</p>
              <p>Co-founder && Ceo</p>
            </div>
            <div className="About_sec_four_sec1_inner2">
              <img
                className="img-fluid ceo_img"
                src="assets\images\ceo3.jpg"
                alt=""
              />
              <p> KAka Boyega</p>
              <p>Co-founder && Ceo</p>
            </div>

            <div className="About_sec_four_sec1_inner3">
              <img
                className="img-fluid ceo_img"
                src="assets\images\ceo3.jpg"
                alt=""
              />
              <p> John Boyega</p>
              <p>Co-founder && Ceo</p>
            </div>
          </div>

          <div className="About_sec_four_sec1">
            <div className="About_sec_four_sec1_inner1">
              <img
                className="img-fluid ceo_img"
                src="assets\images\ceo1.jpg"
                alt=""
              />
              <p> John Boyega</p>
              <p>Co-founder && Ceo</p>
            </div>
            <div className="About_sec_four_sec1_inner2">
              <img
                className="img-fluid ceo_img"
                src="assets\images\ceo3.jpg"
                alt=""
              />
              <p> KAka Boyega</p>
              <p>Co-founder && Ceo</p>
            </div>

            <div className="About_sec_four_sec1_inner3">
              <img
                className="img-fluid ceo_img"
                src="assets\images\ceo3.jpg"
                alt=""
              />
              <p> John Boyega</p>
              <p>Co-founder && Ceo</p>
            </div>
          </div>
        </section>
      </div>

      <div className="conatainer">
        <GetStarted />
      </div>

      <Footer />
    </div>
  );
}

export default About;
