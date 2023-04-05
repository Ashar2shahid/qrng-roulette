import { useEffect } from "react";
import SpinSvg from "./SpinSvg";
import useStore from "/src/store";

export default function SpinButton(props) {
  const { spinned, isSpinning } = useStore((state) => state.wheel);

  useEffect(() => {
    setTimeout(function () {
      let spinSignLetter = document.querySelector(
        `div.spin-text span:nth-of-type(${Math.floor(Math.random() * 4) + 1})`
      );
      spinSignLetter.classList.add("flicker-animation");
    }, 400);
  }, []);

  return (
    <>
      <button
        onClick={props.buttonHandle}
        className={
          spinned || isSpinning
            ? "button pointer-event"
            : `button ${props.buttonDisabled}`
        }
        id="spin"
      >
        <SpinSvg
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
              ? `result ${props.centerResultClass}`
              : "result hide"
          }
        >
          {props.center}
        </div>
      </button>
    </>
  );
}
