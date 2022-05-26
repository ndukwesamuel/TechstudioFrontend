import React from "react";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar";
import Dataset from "./Dataset";

import Frontend_img1 from "../../media/mobile.PNG";

let Frontend_info = "Mobile Development (IOS & Android)";

let Frontend_info_sub = `In this foundational Mobile App Development course, you’ll learn the fundamentals of Dart, including object-oriented programming (OOP) - a concept that can be applied beyond Mobile App Development.`;

let Frontend_process_1 = `We teach the important skills required to jumpstart your career as a web developer. With 5 straight weeks of web training, you learn to think and build like frontend developers.`;

let Frontend_process_2 = `You’ll learn to build different mobile app layout structures with interactive components, creating stunning user interfaces in the process.`;

let Frontend_process_3 = `You’ll go through each process in the app development lifecycle so as to build a fully functional mobile app that can be deployed on both the Android and iOS platforms.`;

function Mobile() {
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

export default Mobile;
