import React, { useState } from "react";
import UiUx from "../../Component/UiUx";
import "./LearningTrack.css";

import { UIux, Graphic, FrontEnd } from "../../dataDummy";

function LearningTrack() {
  const [learn, setLearn] = useState(UIux);
  const UIuxTrack = () => {
    setLearn(UIux);
  };

  const Graphics = () => {
    setLearn(Graphic);
  };

  const FrontEndTrack = () => {
    setLearn(FrontEnd);
  };

  return (
    <div className="LearningTrack_list">
      <div className="LearningTrack_Sec_1">
        <img
          className="LearningTrack_Sec_1_logo_icon"
          src="/assets/images/logo.svg"
          alt=""
        />
        <p className="LearningTrack_Sec_1_our"> Our Learning Tracks</p>

        <p className="LearningTrack_Sec_1_p2">
          Select any of our courses to get started on your tech journey
        </p>

        <div className="LearningTrack_Sec_1_link">
          <button onClick={UIuxTrack} className="active_btn">
            UI/UX Design
          </button>
          <button onClick={Graphics}>Graphics Design</button>

          <button>Android Development</button>
          <button onClick={FrontEndTrack}>Front End Development</button>
          <button>Back End Development</button>
          <p>{learn.name}</p>
        </div>
      </div>

      <div className="LearningTrack_list">
        <UiUx learnTrack={learn} />
      </div>
    </div>
  );
}

export default LearningTrack;
