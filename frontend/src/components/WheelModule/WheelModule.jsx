import Wheel from "./Wheel";
import SpinButton from "./SpinButton";
import { useState } from "react";

export default function WheelModule(props) {
  const spinTime = 5000;
  const frameTime = 150;

  // bolean telling if wheel has been spinned
  const [center, setCenter] = useState(0);

  const [colorSliceColor, setColorSliceColor] = useState("");
  const [whiteSliceColor, setWhiteSliceColor] = useState("");
  const [centerResultClass, setCenterResultClass] = useState("");

  function wheelStrokeColor(num) {
    setColorSliceColor(`var(--${num.color})`);
    setWhiteSliceColor(`var(--${num.color})`);
    setCenterResultClass(num.color);
  }

  function checkWin(num) {
    props.setSpinned(true);

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

  function highlight(timePassed, num) {
    setCenter(num.number); //show number in center
    wheelStrokeColor(num); //change color of wheel to match number

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

    if (timePassed < spinTime - frameTime) {
      setTimeout(function () {
        if (num.number > 0) {
          currentWhiteSlice.classList.remove("selected");
          currentColorSlice.classList.remove("selected");
        }
      }, frameTime);
    } else {
      checkWin(num);

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
    if (timePassed >= spinTime) {
      clearInterval(animations); // finish the animation after 2 seconds
      return;
    }

    var i = Math.floor(Math.random() * 37);

    // highlight the animation at the moment timePassed
    highlight(timePassed, props.nums[i]);
  }

  function buttonHandle() {
    if (!props.userSelection) {
      alert("please make a choice");
      return;
    }

    var start = Date.now(); // remember start time
    setInterval(animations, frameTime, start);
    props.setSpinState(true);
    props.setSpinClass(props.spinButtonClass + " pointer-event");
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
        className={props.spinButtonClass}
        id="spin"
      >
        <SpinButton
          className={!props.spinState ? "spin-text" : "spin-text hide"}
        />
        <div className={!props.spinState ? "spin-text" : "spin-text hide"}>
          <span>S</span>
          <span>P</span>
          <span>I</span>
          <span>N</span>
        </div>
        <div
          className={
            props.spinState ? `result ${centerResultClass}` : "result hide"
          }
        >
          {center}
        </div>
      </button>
    </wheel-module>
  );
}
// props.spinState ? "result" : "result hide";
