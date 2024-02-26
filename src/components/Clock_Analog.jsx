import React from "react";
import { ClockRun } from "./ClockRunner";
ClockRun();
function Clock_Analog() {
  return (
    <div className="container1">
      <div className="circle">
        <div className="circleSmall">
          <div className="circleCenter">
            <img
              className="handle1"
              src="/React_Clock/src/assets/ClockHandle.png"
              alt="3"
            />
            <img
              className="handle1 handle2"
              src="/React_Clock/src/assets/ClockHandle2.png"
              alt="2"
            />
            <img
              className="handle1 handle3"
              src="/React_Clock/src/assets/ClockHandle3.png"
              alt="1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Clock_Analog;
