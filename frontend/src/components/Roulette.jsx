import NumbersGrid from "./NumbersGrid/NumbersGrid";
import WheelModule from "./WheelModule/WheelModule";
import InfoModule from "./InfoModule/InfoModule";
import Bid from "./WheelModule/Bid";
import { useState } from "react";
import useStore from "/src/store";

export default function Roulette() {
  return (
    <roulette-module>
      <Bid />
      <NumbersGrid />
      <WheelModule />
      <InfoModule />
    </roulette-module>
  );
}
