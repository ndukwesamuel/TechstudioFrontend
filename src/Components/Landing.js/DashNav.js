import React from "react";

import "./dash_nav.css";

function DashNav() {
  return (
    <div>
      <div className="Dash_nav">
        <button> Mobile Development</button>
        <button> Frontend</button>
        <button> UI/UX</button>
        <button className="active__dash"> Full Stack</button>
        <button> Data Science</button>
        <hr className="Dash_nav_hr" />
      </div>
    </div>
  );
}

export default DashNav;
