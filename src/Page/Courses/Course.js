import React from "react";

// import Dataset from "./Dataset";
import Dataset from "./Dataset";

import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer/Footer";

function Course() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Dataset />
      </div>

      <Footer />
    </div>
  );
}

export default Course;
