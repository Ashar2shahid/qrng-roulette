import Wheel from "./Wheel";
import SpinButton from "./SpinButton";
import { useState } from "react";
import useStore from "/src/store";

export default function WheelModule(props) {
  const numbers = useStore((state) => state.grid.numbers);
  const userSelection = useStore((state) => state.grid.userSelection);

  const spinned = useStore((state) => state.wheel.spinned);
  const setSpinned = useStore((state) => state.wheel.setSpinned);

  const isSpinning = useStore((state) => state.wheel.isSpinning);
  const setIsSpinning = useStore((state) => state.wheel.setIsSpinning);

  const [colorSliceColor, setColorSliceColor] = useState("");
  const [whiteSliceColor, setWhiteSliceColor] = useState("");
  const [centerResultClass, setCenterResultClass] = useState("");

  const [center, setCenter] = useState(0);

  const spinTime = 5000;
  const frameTime = 150;

  //functions

  // change color of wheel to match number
  function wheelStrokeColor(num) {
    setColorSliceColor(`var(--${num.color})`);
    setWhiteSliceColor(`var(--${num.color})`);
    setCenterResultClass(num.color);
  }

  //check if user won
  function checkWin(num) {
    if (num.checked) {
      console.log("You Won!");
      props.setBanner(
        "<em> CONGRATS </em> <span class='win-lose'>YOU WIN</span>"
      );
    } else {
      console.log("You Lose!");

      props.setBanner(
        "<em> TRY AGAIN </em> <span class='win-lose'>YOU LOSE</span>"
      );
    }
  }

  //highlight number on wheel
  function highlight(num) {
    setCenter(num.number); //set center number
    wheelStrokeColor(num);

    var wheelTexts = document.querySelectorAll("svg.wheel tspan");
    var zeroes = document.querySelector("#zeros-circle");

    if (num.number > 0) {
      var whiteSliceName = `#white-slices #slice-${num.number}`;
      var colorSliceName = `#color-slices #slice-${num.number}-color`;
      var currentWhiteSlice = document.querySelector(whiteSliceName);
      var currentColorSlice = document.querySelector(colorSliceName);
      currentWhiteSlice.classList.add("selected");
      currentColorSlice.classList.add("selected");
    }

    if (isSpinning) {
      setTimeout(function () {
        if (num.number > 0) {
          currentWhiteSlice.classList.remove("selected");
          currentColorSlice.classList.remove("selected");
        }
      }, frameTime);
    } else {
      // checkWin(num);
      // if (num.number == 0) {
      //   wheelTexts.forEach(function (Text) {
      //     Text.classList.add("hide");
      //   });
      //   zeroes.classList.remove("hide");
      // }
    }
  }

  function animations(start) {
    // how much time passed from the start?
    var timePassed = Date.now() - start;
    setIsSpinning(true);
    console.log("isSpinning: ", isSpinning);

    // highlight the animation at the moment timePassed
    var i = Math.floor(Math.random() * 37);
    highlight(numbers[i]);

    if (!isSpinning) {
      clearInterval(animations); // finish the animation after 2 seconds
      setSpinned(true);
      return;
    }
  }

  function buttonHandle() {
    if (!userSelection) {
      alert("please make a choice");
      return;
    }

    var start = Date.now(); // remember start time
    setIsSpinning(true);
    setInterval(animations, frameTime, start);
  }

  //return
  return (
    <wheel-module>
      <Wheel
        colorSliceColor={colorSliceColor}
        whiteSliceColor={whiteSliceColor}
      />
      <button
        onClick={buttonHandle}
        className={isSpinning || spinned ? "button pointer-event" : "button"}
        id="spin"
      >
        <SpinButton className={!isSpinning ? "spin-text" : "spin-text hide"} />
        <div className={!isSpinning ? "spin-text" : "spin-text hide"}>
          <span>S</span>
          <span>P</span>
          <span>I</span>
          <span>N</span>
        </div>
        <div
          className={isSpinning ? `result ${centerResultClass}` : "result hide"}
        >
          {center}
        </div>
      </button>
    </wheel-module>
  );
}
// isSpinning ? "result" : "result hide";
