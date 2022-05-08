import React from "react";
import "./chart.css";

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import profile_img from "../../media/1.jpeg";

import { userData } from "../../data";

function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="Chart--Profile">
      <div>
        <div className="Chart_main">
          <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer className="test" width="100%" aspect={4 / 1}>
              <LineChart data={userData}>
                <XAxis dataKey="name" stroke="#5550bd" />
                <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                <Tooltip />
                {grid && (
                  <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="Chart_inbox">
          <div className="Chart_inbox_one">
            <p> your inbox</p>

            <a href="inboxx"> View All</a>
          </div>

          <div className="Chart_inbox_two">
            <div>
              {" "}
              <img className="Chart_inbox_two_img" src={profile_img} alt="" />
            </div>
            <div>
              {" "}
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
          </div>

          <div className="Chart_inbox_three">
            <div>
              <a href="profile"> Sorunke Sherif</a>
            </div>
            <p> May 3, 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
