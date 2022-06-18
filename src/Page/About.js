import React from "react";
import Footer from "../Component/Footer/Footer";
import GetStarted from "../Component/GetStarted";
import Navbar from "../Component/Navbar";
import "./About.css";

import about_img from "../media/About_icon.PNG";
import CoreValueimg1 from "../TechStudioimages/clock.png";
import CoreValueimg2 from "../TechStudioimages/noun_workspace.png";
import CoreValueimg3 from "../TechStudioimages/money-bag.png";
import CoreValueimg4 from "../TechStudioimages/noun_Learning.png";
import CoreValueimg5 from "../TechStudioimages/noun_colleague.png";
import CoreValueimg6 from "../TechStudioimages/Insurance.png";

import ceo1 from "../TechStudioimages/ceo (1).jpg";
import ceo2 from "../TechStudioimages/ceo (2).jpg";
import ceo3 from "../TechStudioimages/ceo (3).jpg";

function About() {
  return (
    <div>
      <Navbar />
      <section className="container-lg">
        <div class="AboutContainerOne  mt-5">
          <div class="d-md-flex">
            <div class="">
              <div className="">
                <p className="Color1"> KNOW US MORE</p>
                <h2 className=""> About Techstudio</h2>
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

            <div class="">
              <div className="">
                <img className="img-fluid " src={about_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-lg">
        <section className="AboutContainerTwo ">
          <div className="d-md-flex justify-content-md-around">
            <img
              className="img-fluid rounded-3 mb-3 d-block"
              src="/assets/images/About_icon2.jpg"
              alt=""
            />
            <img
              className="img-fluid d-none rounded-3 d-lg-block"
              src="/assets/images/About_icon3.jpg"
              alt=""
            />

            <img
              className="img-fluid rounded-3 d-none"
              src="/assets/images/About_icon4.jpg"
              alt=""
            />

            <img
              className="img-fluid rounded-3 d-block "
              src="/assets/images/About_icon5.jpg"
              alt=""
            />
          </div>
        </section>
      </div>

      <div className="container-lg">
        <section className="AboutContainerThree mt-5 text-center">
          <div className="">
            <h2 className="">Driven by our core values</h2>
            <p>
              We do the things we do out of love for growth, progress and change
              oil the tech space
            </p>
          </div>

          <div className="AboutContainerThreeWrap2 text-center text-md-start">
            <div className="AboutContainerThreeWrap2_CoreValue d-md-flex">
              <div className="">
                <img src={CoreValueimg1} alt="" className="" />
                <p className="font22px Bold">Flexibility</p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>

              <div className="">
                <img src={CoreValueimg2} alt="" className="" />

                <p className="font22px Bold">Condusive Environment</p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>

              <div className="">
                <img src={CoreValueimg3} alt="" className="" />

                <p className="font22px Bold">Affordable tuition fees</p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>
            </div>

            <div className="AboutContainerThreeWrap2_CoreValue d-md-flex ">
              <div className="">
                <img src={CoreValueimg4} alt="" className="" />

                <p className="font22px Bold">Learning & Development</p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>
              <div className="">
                <img src={CoreValueimg5} alt="" className="" />

                <p className="font22px Bold">Great Colleaggues</p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>

              <div className="">
                <img src={CoreValueimg6} alt="" className="" />

                <p className="font22px Bold">Certificates</p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container-lg">
        <section className="AboutContainerFour">
          <h1> Meet the team</h1>
          <div className="d-md-flex justify-content-md-center gap1 text-center justify-content-lg-around">
            <div className="">
              <img className="img-fluid" src={ceo3} alt="" />
              <p className="Bold"> John Boyega</p>
              <p>Co-founder && Ceo</p>
            </div>
            <div className="">
              <img className="img-fluid" src={ceo2} alt="" />

              <p className="Bold"> KAka Boyega</p>
              <p>Co-founder && Ceo</p>
            </div>

            <div className="">
              <img className="img-fluid " src={ceo3} alt="" />

              <p className="Bold"> John Boyega</p>
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
