import React, { useEffect, useState } from "react";

import "./DNav.css";

import { Dashboard, ClassRoom, Message } from "./dashicons";
import { Link } from "react-router-dom";

function DNav() {
  // const [size, setSize] = useState(window.innerWidth);

  // const checkSize = () => {
  //   setSize(window.innerWidth);
  // };

  // useEffect(() => {
  //   console.log("useEffect");
  //   window.addEventListener("resize", checkSize);
  //   return () => {
  //     console.log("cleanup");
  //     window.removeEventListener("resize", checkSize);
  //   };
  // }, []);

  // if (size < 768) {
  //   return (
  //     <div className="DNav">
  //       <div className="tttt">
  //         <img
  //           className="img-fluid DNav_logo"
  //           src="https://res.cloudinary.com/dkzds0azx/image/upload/v1654336551/Tech%20Studio%20images/Image_129_yqrzep.png"
  //           alt="dfkjdf"
  //         />
  //       </div>
  //       div
  //     </div>
  //   );
  // }
  return (
    <div className="DNav">
      <div className="tttt">
        <div className="DNav_icon d-flex justify-content-around align-items-center flex-sm-column ">
          <Link to="/DashboardHome">
            <img
              className="img-fluid DNav_logo "
              src="https://res.cloudinary.com/dkzds0azx/image/upload/v1654336551/Tech%20Studio%20images/Image_129_yqrzep.png"
              alt="dfkjdf"
            />
          </Link>
          <Link to="/Dashboard_User">
            <Dashboard />
          </Link>
          <ClassRoom />
          <Message />
        </div>
      </div>
    </div>
  );
}

export default DNav;
