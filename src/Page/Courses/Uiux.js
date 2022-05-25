import React from "react";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar";
import Dataset from "./Dataset";

import uiux_img1 from "../../media/uiux_cap.PNG";

let uiux_info = "User Interface & user experience Design";
let uiux_info_sub = `Learn to design and deliver digital products that serve clients’ needs and solve users’ problems. Understand the fundamental techniques and tools of design like problem definition, user research, prototyping, testing, and more.`;

let uiux_process_1 = `We teach the important skills required to jumpstart your career as a product designer. With 10 straight weeks of training, you learn to think, build and solve complex UI/UX challenges.`;

let uiux_process_2 = `You move from understanding the core principles of effective design to applying tactics like wireframing, low- and high-fidelity prototyping, usability testing, and user interface design to build a portfolio of intuitive digital products.`;
let uiux_process_3 = `You’ll learn the fundamentals of working as a team; sharpen your communication skills and collaborate with web development teams to build, change, maintain, and successfully execute cross-functional UI/UX projects.`;

function Uiux() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Dataset
          data_img1={uiux_img1}
          data_head={uiux_info}
          data_head_sub={uiux_info_sub}
          data_process_1={uiux_process_1}
          data_process_2={uiux_process_2}
          data_process_3={uiux_process_3}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Uiux;
