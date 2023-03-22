import NumbersGrid from "./NumbersGrid/NumbersGrid";
import WheelModule from "./WheelModule/WheelModule";
import InfoModule from "./InfoModule/InfoModule";
import { useState } from "react";
import useStore from "/src/store";

export default function Roulette() {
  const [resultBanner, setBanner] = useState("");

  return (
    <roulette-module>
      <NumbersGrid />
      <WheelModule setBanner={setBanner} />
      <InfoModule resultBanner={resultBanner} />
    </roulette-module>
  );
}
