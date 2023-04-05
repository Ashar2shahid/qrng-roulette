import NumbersGrid from "./NumbersGrid/NumbersGrid";
import WheelModule from "./WheelModule/WheelModule";
import InfoModule from "./InfoModule/InfoModule";
import { useState } from "react";
import useStore from "/src/store";

export default function Roulette() {
  return (
    <roulette-module>
      <NumbersGrid />
      <WheelModule />
      <InfoModule />
    </roulette-module>
  );
}
