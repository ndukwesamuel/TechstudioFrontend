import React from "react";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar";
import Dataset from "./Dataset";

import Datascience_img1 from "../../media/datascience.PNG";

// Datascience
let Datascience_info = "Data Science Immersive With Python";
let Datascience_info_sub = `Get your hands dirty working with complex data. Dive into the Python programming language, understand data analysis and statistical modeling using Python, after which you move into machine learning and algorithms.`;

let Datascience_process_1 = `You learn the skills needed to skyrocket your career as a data analyst/scientist. You have 10 straight weeks of training to predict trends and generate informed predictive models.`;

let Datascience_process_2 = `You’ll learn the fundamentals of the Python programming language and it’s usage in analysing complex data. You’ll build and refine machine learning models to predict patterns from data sets and complete hands-on exercises to reinforce the newly learned skills.`;
let Datascience_process_3 = `You’ll learn the fundamentals of being a true data analyst; you work with a team, sharpen your communication skills and collaborate with members through real-world projects.`;

function Datascience() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Dataset
          data_img1={Datascience_img1}
          data_head={Datascience_info}
          data_head_sub={Datascience_info_sub}
          data_process_1={Datascience_process_1}
          data_process_2={Datascience_process_2}
          data_process_3={Datascience_process_3}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Datascience;
