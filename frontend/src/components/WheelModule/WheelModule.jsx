import Wheel from "./Wheel";
import SpinButton from "./SpinButton";
import { useState } from "react";
import useStore from "/src/store";

export default function WheelModule(props) {
  const { numbers, selection } = useStore((state) => state.grid);
  //   console.log(selection?.value);
  const {
    spinned,
    setSpinned,
    isSpinning,
    setIsSpinning,
    writeContract: spinWheel,
  } = useStore((state) => state.wheel);

  const [colorSliceColor, setColorSliceColor] = useState("");
  const [whiteSliceColor, setWhiteSliceColor] = useState("");
  const [centerResultClass, setCenterResultClass] = useState("");
  const [center, setCenter] = useState(0);
  const spinTime = 5000;
  const frameTime = 150;

  //functions

  async function buttonHandle() {
    if (!selection) {
      alert("please make a choice");
      return;
    }

    //  await spinWheel();

    let start = Date.now(); // remember start time
    setIsSpinning(true);
    //  console.log("isSpinning: ", isSpinning);

    setInterval(animations, frameTime, start);
  }

  function animations(start) {
    var timePassed = Date.now() - start;
    if (timePassed >= spinTime) {
      clearInterval(animations); // finish the animation after 2 seconds
      setIsSpinning(false);
      setSpinned(true);
      return;
    }

    // highlight the animation at the moment timePassed
    const i = Math.floor(Math.random() * 37);
    highlight(numbers[i], timePassed);
  }

  //highlight number on wheel
  function highlight(num, timePassed) {
    setCenter(num.number); //set center number
    wheelStrokeColor(num);
    const currentWhiteSlice = document.querySelector(
      `#white-slices #slice-${num.number}`
    );
    const currentColorSlice = document.querySelector(
      `#color-slices #slice-${num.number}-color`
    );

    if (num.number > 0) {
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
      //  var wheelTexts = document.querySelectorAll("svg.wheel tspan");
      //  var zeroes = document.querySelector("#zeros-circle");
      //   wheelTexts.forEach(function (Text) {
      //     Text.classList.add("hide");
      //   });
      //   zeroes.classList.remove("hide");
      // }
    }
  }
  // change color of wheel to match number
  function wheelStrokeColor(num) {
    setColorSliceColor(`var(--${num.color})`);
    setWhiteSliceColor(`var(--${num.color})`);
    setCenterResultClass(num.color);
  }

  //check if user won
  function checkWin(num) {
    const banner = `
  	 <em>
  	 	${num.checked ? "CONGRATS" : "TRY AGAIN"}
  	 </em>
  	 <span class="win-lose">
  	 	${num.checked ? "YOU WIN" : "YOU LOSE"}
  	 </span>
  	 `;

    props.setBanner(banner);
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
        <SpinButton
          className={isSpinning || spinned ? "spin-text hide" : "spin-text"}
        />
        <div className={isSpinning || spinned ? "spin-text hide" : "spin-text"}>
          <span>S</span>
          <span>P</span>
          <span>I</span>
          <span>N</span>
        </div>
        <div
          className={
            isSpinning || spinned
              ? `result ${centerResultClass}`
              : "result hide"
          }
        >
          {center}
        </div>
      </button>
    </wheel-module>
  );
}
// isSpinning ? "result" : "result hide";
