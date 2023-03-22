import NumbersGrid from "./NumbersGrid/NumbersGrid";
import WheelModule from "./WheelModule/WheelModule";
import InfoModule from "./InfoModule/InfoModule";
import { useState } from "react";

export default function Roulette() {
  const [resultBanner, setBanner] = useState("");
  const [spinned, setSpinned] = useState(false);
  const [userSelection, setUserSelection] = useState("");
  const [spinState, setSpinState] = useState(false);
  const [spinButtonClass, setSpinClass] = useState("button");

  var numsArr = Array.from(Array(37).keys());
  const blueNums = [
    3, 32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12,
  ];

  numsArr = numsArr.map((num) => {
    const record = {
      number: num,
      checked: false,
      color: blueNums.includes(num + 1) ? "blue" : "red",
    };

    if (record.number == 0) {
      record.color = "white";
    }
    return record;
  });

  const [nums, setNums] = useState(numsArr);
  function resetSLiceClass() {
    var selectedSlices = document.querySelectorAll(".selected");
    selectedSlices.forEach(function (slice) {
      // console.log(slice);
      slice.classList.remove("selected");
      // console.log(slice);
    });
  }

  function resetRoulette() {
    setSpinClass("button");
    setSpinState(false);
    setSpinned(false);
    resetSLiceClass();
    setNums(
      nums.map((num) => {
        num.checked = false;
        return num;
      })
    );
  }

  return (
    <roulette-module>
      <NumbersGrid
        nums={nums}
        setNums={setNums}
        setUserSelection={setUserSelection}
      />
      <WheelModule
        userSelection={userSelection}
        nums={nums}
        setBanner={setBanner}
        setSpinned={setSpinned}
        spinState={spinState}
        setSpinState={setSpinState}
        spinButtonClass={spinButtonClass}
        setSpinClass={setSpinClass}
      />
      <InfoModule
        resultBanner={resultBanner}
        spinned={spinned}
        resetRoulette={resetRoulette}
      />
    </roulette-module>
  );
}
