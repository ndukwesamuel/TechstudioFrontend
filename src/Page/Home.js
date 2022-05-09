import React from "react";
import Footer from "../Component/Footer/Footer";

import img from "../media/UXUI.jpg";

import "./Home.css";
function Home() {
  return (
    <div>
      <section className="Home_sec_one">
        <div className="Home_sec_one_sec_1 ">
          <p>Your Dream Tech Career Starts Here </p>

          <p className="">
            Stutern offers graduates a path to a fulfilling career through job
            placement and skills development.
          </p>

          <div className=" Home_sec_one_sec_2">
            <button className="btn btn-primary">Take a course</button>
            <button className="btn btn-outline-primary">Log In</button>
          </div>
        </div>
        <div>
          <img
            className="img-fluid Home_sec_one_img_icon"
            src="/assets/images/img.png"
            alt=""
          />
        </div>
      </section>

      <section className="Home_sec_two">
        <div className="Home_sec_two_sec_one">
          <h2>Why choose Techstudio?</h2>
          <img
            className=" img-fluid Home_sec_two_sec_one_img "
            src="/assets/images/icon_4.PNG"
            alt=""
          />
        </div>
        <div className="Home_sec_two_sec_one">
          <div className=" Home_sec_two_sec_one_first">
            <img
              className=" img-fluid  "
              src="/assets/images/icon_1.PNG"
              alt=""
            />
            <p>Always welcoming</p>
            <p>
              Our platform allows easy onboarding to any of our programs you
              wish to be part of.
            </p>
          </div>

          <div className=" Home_sec_two_sec_one_first">
            <img
              className=" img-fluid  "
              src="/assets/images/icon_2.PNG"
              alt=""
            />
            <p>Online and Offline Classes</p>
            <p>
              Our platform provides a comfortable and seamless Online and
              offline class experience
            </p>
          </div>

          <div className=" Home_sec_two_sec_one_first">
            <img
              className=" img-fluid  "
              src="/assets/images/icon_3.PNG"
              alt=""
            />
            <p>There when you need us</p>
            <p>
              Our dedicated team of tech experts research and, compile knowledge
              across sectors in tech to give you the best resources needed.
            </p>
          </div>
        </div>
      </section>

      <section className="Home_sec_three">
        <div>
          <div className="Home_sec_three_innerDiv">
            <p className="Home_sec_three_innerDiv_message">
              I have been trying to figure out a way to kickstart my career in
              tech to no avail. I tried self tutorial, still nothing. When I
              tried techstudio 10 weeks training, my story changed for better
            </p>

            <div className="Home_sec_three_innerDiv_profile">
              <img
                className="img-fluid Home_sec_three_innerDiv_profile_img"
                src={img}
                alt=""
                onClick={() => {
                  console.log("click me");
                }}
              />
              <div>
                <p cls>Sherif Sorunke</p>
                <p> Product Designer, Smartace</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Home_sec_four">
        <div className="Home_sec_four_sec_one">
          <img
            className="img-fluid Home_sec_four_img"
            src="/assets/images/icon_5.PNG"
            alt=""
          />
        </div>

        <div className="Home_sec_four_sec_two">
          <p> TAKE A COURSE</p>
          <p> Learn a skill to elevate your earning potential</p>
          <p>
            Our Graduate Accelerator program is designed to connect the most
            ambitious university graduates with long-term employment and help
            you launch your career.
          </p>

          <button className="btn btn-primary">KNOW US MORE</button>
        </div>
      </section>

      <section className="Home_sec_four">
        <div className="">
          <ul>
            <li>
              Apply
              <span>
                Apply for any of our learning tracks. Techstudio offers diverse
                range of learning courses designed to give you the skills needed
                to grow professionally.
              </span>
            </li>

            <li>
              Get Admitted
              <span>
                Receive an admission offer and reserve your spot in the program.
                You will complete the required KYC procedures
              </span>
            </li>

            <li>
              Start classes
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
            className="img-fluid Home_sec_four_images"
            src="/assets/images/icon_6.png"
            alt=""
          />
        </div>
      </section>

      <section className="Home_sec_five">
        <div>
          <p>Try TechStudio</p>
          <p>Get started with Techstudio</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div>
          <img
            className="img-fluid Home_sec_five_img2"
            src="/assets/images/icon_6.png"
            alt=""
          />
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
