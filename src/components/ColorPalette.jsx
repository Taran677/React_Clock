import { changeTheme } from "./changeTheme";
import React from "react";

setTimeout(() => {
    changeTheme()
}, 100);
function ColorPalette() {
  return (
    <div className="container3">
      {" "}
      <div className="red ColorBlock" ></div>
      <div className="blue ColorBlock" ></div>
      <div className="green ColorBlock" ></div>
      <div className="orange ColorBlock" ></div>
    </div>
  );
}
export default ColorPalette;
