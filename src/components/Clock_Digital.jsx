import { ClockRun2 } from "./ClockRun2";
import React from "react";

function ClockDigital() {
  return (
    <div className="container2">
      <div className="one block">00</div>:<div className="two block">00</div>:
      <div className="three block">00</div>
    </div>
  );
}
setTimeout(() => {
  ClockRun2();
}, 100);
export default ClockDigital;
