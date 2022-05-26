import React from "react";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar";

import "./contact.css";

function Contact() {
  return (
    <section>
      <header className="contact_header">
        <Navbar white_nav />

        <div className="contact_header_div">
          <p> We'd love to hear from you</p>

          <p>
            Whether you have a question about our classes, pricing or anything
            else, our team is ready to answer all your questions
          </p>
        </div>
      </header>
      <div className="container">
        <section className="contact_sec1 ">
          <div className="contact_sec1_one">
            <div className="contact_sec1_wrapper">
              <div className="contact_sec1_form">
                <form action="" method="post">
                  <div>
                    <label htmlFor="">Full Name</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control"
                      placeholder="Firstname Lastname"
                    />
                  </div>

                  <div>
                    <label htmlFor="">Email Address</label>
                    <input
                      className="form-control"
                      type="email"
                      name=""
                      id=""
                      placeholder="@gmail.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="">Subject</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control"
                      placeholder="Training programs"
                    />
                  </div>

                  <div>
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
            </div>
          </div>

          <div className="contact_sec1_two">
            <div className="contact_sec2_wrapper">
              <p>Our Office Location</p>
              <p>Where the magic happens</p>
              <div className="contact_sec2_wrapper_inner">
                <img
                  className="img-fluid "
                  src="assets\Icons\Tech Studio images\nigeria.png"
                  alt=""
                />
                <div className="contact_sec2_wrapper_inner_two">
                  <p> Lagos, Nigeria</p>
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
