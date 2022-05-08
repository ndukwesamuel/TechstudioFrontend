import React from "react";
import "./featuredInfo.css";

import img from "../../media/1.jpeg";

function FeaturedInfo() {
  return (
    <>
      <div className="featured">
        <div className="featuredItem">
          <div className="inner_featuredItem">
            <div className="inner_featuredItem_one">
              <img className="img_inner_featuredItem" src={img} alt="" />
            </div>

            <div className="inner_featuredItem_two">
              <p>Enrolled Students</p>
              <p>100</p>
            </div>
          </div>
        </div>

        <div className="featuredItem">
          <div className="inner_featuredItem">
            <div className="inner_featuredItem_one">
              <img className="img_inner_featuredItem" src={img} alt="" />
            </div>

            <div className="inner_featuredItem_two">
              <p>Enrolled Students</p>
              <p>100</p>
            </div>
          </div>
        </div>

        <div className="featuredItem">
          <div className="inner_featuredItem">
            <div className="inner_featuredItem_one">
              <img className="img_inner_featuredItem" src={img} alt="" />
            </div>

            <div className="inner_featuredItem_two">
              <p>Enrolled Students</p>
              <p>100</p>
            </div>
          </div>
        </div>

        <div className="featuredItem">
          <div className="inner_featuredItem">
            <div className="inner_featuredItem_one">
              <img className="img_inner_featuredItem" src={img} alt="" />
            </div>

            <div className="inner_featuredItem_two">
              <p>Enrolled Students</p>
              <p>100</p>
            </div>
          </div>
        </div>

        <div className="featuredItem">
          <div className="inner_featuredItem">
            <div className="inner_featuredItem_one">
              <img className="img_inner_featuredItem" src={img} alt="" />
            </div>

            <div className="inner_featuredItem_two">
              <p>Enrolled Students</p>
              <p>100</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedInfo;
