import React from "react";
import "./UiUx.css";

import uiux from "../media/UXUI.jpg";
function UiUx({ learnTrack }) {
  const { name, des, price, start, weeks } = learnTrack;
  console.log(learnTrack);
  return (
    <div className="UiUx">
      <div className="item_container">
        <div>
          <img className="item_container_track_icon" src={uiux} alt="" />
        </div>

        <div className="item_container_sec">
          <h2 className="item_container_h2">{name}</h2>
          <p className="item_container_sec_des">{des}</p>

          <div className="item_container_duration">
            <div>
              <img src="/assets/images/cal.png" alt="" />
              <span>{weeks}</span>
            </div>

            <div>
              <img src="/assets/images/time.png" alt="" />
              <span>{start}</span>
            </div>
          </div>

          <div className="item_container_price_enrol">
            <p className="item_container_price">{price}</p>

            <div>
              <button className="btn btn-primary">Enrol</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UiUx;
