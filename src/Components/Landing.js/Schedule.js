import React from "react";
import "./Schedule.css";

import img from "../../media/1.jpeg";

function Schedule() {
  return (
    <div className="Schedule">
      <div className="">
        <p className="S_current_date"> Today, 28th March, 2021</p>

        <p>
          The course is highly interactive with projects, Checklists &
          actionable lectures built into…
        </p>

        <div className="Schedule_time">
          <img className="" src="/assets/images/time.png" alt="" />

          <div>
            <p>55 min</p>
            <p> Duration</p>
          </div>
        </div>

        <div className="Schedule_time">
          <img className="" src="/assets/images/time.png" alt="" />

          <div>
            <p>55 min</p>
            <p> Duration</p>
          </div>
        </div>

        <div className="Schedule_joined">
          <div>
            <img src={img} alt="" />
            <img className="" src={img} alt="" />
            <img className="" src={img} alt="" />
          </div>

          <p>+30 joined the class</p>
        </div>

        <hr />

        <div>
          <button className="btn btn-primary">Reschedule</button>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
