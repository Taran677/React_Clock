import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./components/Logo";
import Description from "./components/Description";
import Clock_Analog from "./components/Clock_Analog";
import ClockDigital from "./components/Clock_Digital";
import ColorPalette from "./components/ColorPalette";


function App() {
  return (
    <>
      {""}
      <Logo />
      <Description />
      <Clock_Analog></Clock_Analog>
      <ClockDigital></ClockDigital>
      <ColorPalette />
    </>
  );
}

export default App;
