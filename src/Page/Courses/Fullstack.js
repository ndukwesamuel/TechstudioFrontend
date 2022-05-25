import React from "react";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar";
import Dataset from "./Dataset";

import Fullstack_img1 from "../../media/fullstack.PNG";

let Fullstack_info = "Fullstack Web Development";

let Fullstack_info_sub = `Let’s help you become a professional frontend web developer. You’ll learn all you need to know to become a Frontend Developer and build interesting portfolios while learning the fundmentals of HTML, CSS, JavaScript and React.`;

let Fullstack_process_1 = `In 12 weeks, you’ll be a professional full-stack developer, able to build real-time interactive and dynamic applications. We teach fullstack JavaScript because growing in popularity every day and it’s here to stay.`;

let Fullstack_process_2 = `You’ll get your hands dirty by building real life websites,APIs, and data-driven apps to gain confidence and sharpen yours skills. You’ll also collaborate with classmates on a range of projects to add to your portfolio.`;

let Fullstack_process_3 = `You graduate with a valued portfolio required to launch your career. All our students receive career guidance and mentorship with the support of our career counselors through every step of their job search.`;

function Frontend() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Dataset
          data_img1={Fullstack_img1}
          data_head={Fullstack_info}
          data_head_sub={Fullstack_info_sub}
          data_process_1={Fullstack_process_1}
          data_process_2={Fullstack_process_2}
          data_process_3={Fullstack_process_3}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Frontend;
