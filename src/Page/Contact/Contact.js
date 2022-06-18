import React from "react";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar";

import "./contact.css";

function Contact() {
  return (
    // <section className="Employers">
    // <div className="bgColor4">
    <section className="ContactComponent ">
      <div className="bgColor3 text-light pb-5">
        <Navbar white_nav />
        <header className="text-center container-lg  py-md-5">
          <div className="">
            <p className="font32px Bold"> We'd love to hear from you</p>

            <p>
              Whether you have a question about our classes, pricing or anything
              else, our team is ready to answer all your questions
            </p>
          </div>
        </header>
      </div>

      <div className="container-lg ">
        <section className="ContactComponentForm mt-5 d-md-flex gap1 py-5">
          <div className="">
            <form action="" method="post" className="px-3 py-3 px-md-4">
              <div className="mb-3">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control"
                  placeholder="Firstname Lastname"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="">Email Address</label>
                <input
                  className="form-control"
                  type="email"
                  name=""
                  id=""
                  placeholder="@gmail.com"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="">Subject</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control"
                  placeholder="Training programs"
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                >
                  Type your message, questions or inquiries here
                </textarea>
              </div>
            </form>
          </div>

          <div className="">
            <div className=" text-center mt-4 ">
              <p className="Bold font32px Color">Our Office Location</p>
              <p>Where the magic happens</p>
              <div className="">
                <img
                  className="img-fluid "
                  src="assets\Icons\Tech Studio images\nigeria.png"
                  alt=""
                />
                <div className="">
                  <p className="Bold Color"> Lagos, Nigeria</p>
                  <p>
                    2950 S. Delaware Street, Suite 201 San Mateo CA 94403
                    Reception/General enquiries: +1 650 513 0514
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </section>
  );
}

export default Contact;
