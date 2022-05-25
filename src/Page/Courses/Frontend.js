import React from "react";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar";
import Dataset from "./Dataset";

import Frontend_img1 from "../../media/front.PNG";

let Frontend_info = "Frontend Web Development";

let Frontend_info_sub = `Let’s help you become a professional frontend web developer. You’ll learn all you need to know to become a Frontend Developer and build interesting portfolios while learning the fundmentals of HTML, CSS, JavaScript and React.`;

let Frontend_process_1 = `We teach the important skills required to jumpstart your career as a web developer. With 5 straight weeks of web training, you learn to think and build like frontend developers.`;

let Frontend_process_2 = `You move from understanding web basics to launching Single Page Applications (SPAs). You’ll be taught to build smart SPAs using vanilla JavaScript that interacts with user inputs.`;

let Frontend_process_3 = `And finally, you’ll learn the fundamentals of working as a team; collaborate with other group members of the class to build, change, maintain, and secure an application. Track your team development process using Version Control Systems.`;

function Frontend() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Dataset
          data_img1={Frontend_img1}
          data_head={Frontend_info}
          data_head_sub={Frontend_info_sub}
          data_process_1={Frontend_process_1}
          data_process_2={Frontend_process_2}
          data_process_3={Frontend_process_3}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Frontend;
