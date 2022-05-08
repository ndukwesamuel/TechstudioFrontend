import React from "react";
import FeaturedInfo from "../Components/featuredInfo/FeaturedInfo";
import Chart from "../Components/Landing.js/Chart";
import Dash from "../Components/Landing.js/Dash";
import DashNav from "../Components/Landing.js/DashNav";
import Resourceswidget from "../Components/Landing.js/Resourceswidget";
import Schedule from "../Components/Landing.js/Schedule";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="Home_sec1">
        <Dash />
      </div>
      <div>
        <FeaturedInfo />
      </div>
      <div className="Home_sec2 ">
        <DashNav />
      </div>

      <div className="homeWidgets">
        <div className="homeWidgets_sec_one">
          <Resourceswidget />
        </div>

        <div className="homeWidgets_sec_two">
          <Chart grid dataKey="Active User" />
        </div>
        <div className="homeWidgets_sec_three">
          <Schedule />
        </div>
      </div>
    </div>
  );
}

export default Home;
