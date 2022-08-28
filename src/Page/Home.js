import React, { useEffect, useState } from "react";
import Footer from "../Component/Footer/Footer";
import GetStarted from "../Component/GetStarted";
import Navbar from "../Component/Navbar";
import img from "../media/UXUI.jpg";
import "./Home.css";

import Homeimg2 from "../TechStudioimages/Group 10032.png";
import Homeimg3 from "../TechStudioimages/Group 25213.png";

let url = "https://techstudioacademybackend.herokuapp.com/";

function Home() {
  const [first, setfirst] = useState([]);

  const data = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setfirst(data);
    console.log(url);
    console.log(data);
  };
  useEffect(() => {
    data();
    return () => {};
  }, []);

  return (
    <div className="HomeComponent">
      <section className="HomeComponentSectionOne bgColor">
        <Navbar />
        <div className="HomeComponentSectionOneFlex  d-flex container flex-column-reverse pb-5 text-center flex-lg-row text-lg-start  align-items-md-center  justify-content-lg-around">
          <div className="HomeComponentSectionOne-side1 ">
            {/* <pre>{process.env.REACT_APP_URL}</pre> */}
            <p className="font44px ">Your Dream Tech Career Starts Here </p>
            <p className="">
              Stutern offers graduates a path to a fulfilling career through job
              placement and skills development.
            </p>

            <div className="">
              <button className="btn btn-primary ">Take a course</button>
              <button className="btn btn-outline-primary ms-4">Log In</button>
            </div>
          </div>
          <div className="HomeComponentSectionOne-side2">
            <img
              className="img-fluid Home_sec_one_img_icon"
              src="/assets/images/img.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className=" container-xl">
        <div className="HomeComponentSectionTwo  text-center py-5">
          <h2 className="SemiBold text-lg-start">Why choose Techstudio?</h2>
          <div className="d-lg-flex text-lg-start">
            <div className="HomeComponentSectionTwoSide1 ">
              <img
                className=" img-fluid d-none d-lg-block"
                src="/assets/images/icon_tab.PNG"
                alt=""
              />
            </div>

            <div className="HomeComponentSectionTwoSide2">
              <div className="d-lg-flex  justify-content-lg-center flex-lg-wrap">
                <div className="">
                  <img className=" img-fluid my-1 " src={Homeimg2} alt="" />
                  <p className="font18px RubikFont">Always welcoming</p>
                  <p>
                    Our platform allows easy onboarding to any of our programs
                    you wish to be part of.
                  </p>
                </div>

                <div className="">
                  <img
                    className=" img-fluid  my-2 "
                    src="/assets/images/icon_2.PNG"
                    alt=""
                  />
                  <p className="  font18px RubikFont">
                    Online and Offline Classes
                  </p>
                  <p>
                    Our platform provides a comfortable and seamless Online and
                    offline class experience
                  </p>
                </div>

                <div className="">
                  <img
                    className="img-fluid my-1 "
                    src="/assets/images/icon_3.PNG"
                    alt=""
                  />
                  <p className="font18px RubikFont">There when you need us</p>
                  <p>
                    Our dedicated team of tech experts research and, compile
                    knowledge across sectors in tech to give you the best
                    resources needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-xl">
        <div className="HomeComponentSectionThree bgColor3 text-center  text-light ">
          <div className="">
            <p className="">
              I have been trying to figure out a way to kickstart my career in
              tech to no avail. I tried self tutorial, still nothing. When I
              tried techstudio 10 weeks training, my story changed for better
            </p>

            <div className="d-flex align-items-center justify-content-center text-start gap1">
              <img className="img-fluid " src={img} alt="" />
              <div>
                <p className="Color1 Bold">Sherif Sorunke</p>
                <p> Product Designer, Smartace</p>
              </div>
            </div>
            {/* 
            <div>
              <img className="img-fluid" src={Homeimg3} alt="" />
              <div></div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="HomeComponentSectionFour container-xl">
        <div className="HomeComponentSectionFourWrapper py-5 text-center  d-lg-flex">
          <div className="">
            <img className="img-fluid" src="/assets/images/icon_5.PNG" alt="" />
          </div>

          <div className="text-lg-start">
            <p className="Color1"> TAKE A COURSE</p>
            <p className="ExtraBold">
              Learn a skill to elevate your earning potential
            </p>
            <p>
              Our Graduate Accelerator program is designed to connect the most
              ambitious university graduates with long-term employment and help
              you launch your career.
            </p>

            <button className="btn btn-primary">KNOW US MORE</button>
          </div>
        </div>
      </section>

      <section className="HomeComponentSectionFive container-xl">
        <div className="HomeComponentSectionFiveWrap d-md-flex align-items-md-center">
          <div className="">
            <ul className="">
              <li className="mb-3 ">
                <span className="SemiBold d-block mb-3 font24px">Apply</span>
                <span className="">
                  Apply for any of our learning tracks. Techstudio offers
                  diverse range of learning courses designed to give you the
                  skills needed to grow professionally.
                </span>
              </li>

              <li className="mb-3  ">
                <span className="SemiBold d-block mb-3 font24px">
                  Get Admitted
                </span>

                <span>
                  Receive an admission offer and reserve your spot in the
                  program. You will complete the required KYC procedures
                </span>
              </li>
              <li className="mb-3 ">
                <span className="SemiBold d-block mb-3 font24px">
                  Start classes
                </span>

                <span>
                  Attend your first class, partake in group projects, and 1:1
                  sessions. Our team will keep an eye on your growth even even
                  after the training
                </span>
              </li>
            </ul>
          </div>
          <div className="">
            <img
              className="img-fluid d-block m-auto mb-3"
              src="/assets/images/icon_6.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="container-xl">
        <GetStarted />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
