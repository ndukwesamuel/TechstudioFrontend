import React from "react";
import "./About.css";

function About() {
  return (
    <div>
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
                <img
                  className="img-fluid "
                  src="/assets/images/About_icon.png"
                  alt=""
                />
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

          <div className="contanier-fluid">
            <div className="row">
              <div className="col-md-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>

              <div className="col-md-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>
              <div className="col-md-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>
              <div className="col-md-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>
              <div className="col-md-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>
              <div className="col-md-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>
              <div className="col-md-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>

              <div className="col-md-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>
              <div className="col-md-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>
              <div className="col-md-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>
              <div className="col-md-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>
              <div className="col-md-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>
              <div className="col-md-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
