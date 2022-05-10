import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <section className="About_sec_one">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p> KNOW US MORE</p>
              <h2> About Techstudio</h2>
              <p>
                Techstudio is an academy focused putting youth and adult on
                track in the tech world. Our systems designed to inspire focused
                learning, creativity and collaboration.Our space is equipped
                with state-of-the-art learning equipments with no more than 10
                students per class.
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
            <div class="col-md-6">
              <img
                className="img-fluid "
                src="/assets/images/About_icon.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="About_sec_two container ">
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

      <section className="About_sec_three container">
        <h2>Driven by our core values</h2>
        <p>
          We do the things we do out of love for growth, progress and change oil
          the tech space
        </p>

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
  );
}

export default About;
