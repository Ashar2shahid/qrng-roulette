import Wheel from "./Wheel";
import SpinButton from "./SpinButton";
import { useEffect, useState } from "react";
import useStore from "/src/store";

export default function WheelModule(props) {
  const { numbers, selection } = useStore((state) => state.grid);
  //   console.log(selection?.value);
  const {
    result,
    spinned,
    isSpinning,
    isWinner,
    writeContract: spinWheel,
  } = useStore((state) => state.wheel);

  const [colorSliceColor, setColorSliceColor] = useState("");
  const [whiteSliceColor, setWhiteSliceColor] = useState("");
  const [centerResultClass, setCenterResultClass] = useState("");
  const [center, setCenter] = useState(null);
  const [animationId, setAnimationId] = useState(0);
  const frameTime = 200;

  //functions

  useEffect(() => {
    if (isSpinning && !spinned) {
      setAnimationId(setInterval(animations, frameTime));
    }
    if (!isSpinning && spinned) {
      clearInterval(animationId);
      highlight(numbers[result]);
    }
  }, [isSpinning, spinned]);

  async function buttonHandle() {
    if (!selection) {
      alert("please make a choice");
      return;
    }
    //  setCenter("See Wallet");
    await spinWheel();
  }

  function animations() {
    // highlight the animation at the moment timePassed
    const i = Math.floor(Math.random() * 37);
    highlight(numbers[i]);
  }

  //highlight number on wheel
  function highlight(num) {
    setCenter(num.number); //set center number

    wheelStrokeColor(num);

    document
      .querySelectorAll("#white-slices .slices")
      .forEach(function (slice) {
        slice.classList.remove("selected");
      });
    document
      .querySelectorAll("#color-slices .slices")
      .forEach(function (slice) {
        slice.classList.remove("selected");
      });

    sliceColor(num);
  }
  // change color of wheel to match number
  function wheelStrokeColor(num) {
    setColorSliceColor(`var(--${num.color})`);
    setWhiteSliceColor(`var(--${num.color})`);
    setCenterResultClass(num.color);
  }

  function sliceColor(num) {
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
        className={spinned || isSpinning ? "button pointer-event" : "button"}
        id="spin"
      >
        <SpinButton
          className={spinned || isSpinning ? "spin-text hide" : "spin-text"}
        />
        <div className={spinned || isSpinning ? "spin-text hide" : "spin-text"}>
          <span>S</span>
          <span>P</span>
          <span>I</span>
          <span>N</span>
        </div>
        <div
          className={
            spinned || isSpinning
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
