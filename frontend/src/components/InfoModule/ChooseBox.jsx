import { useEffect } from "react";
import Arrow from "./Arrow";

export default function ChooseBox() {
  useEffect(() => {
    setTimeout(function () {
      let randomChooseEles = document.querySelectorAll("choose-box > *");
      let randomChooseEle =
        randomChooseEles[Math.floor(Math.random() * randomChooseEles.length)];
      randomChooseEle.classList.add("flicker-animation2");
    }, 300);
  });

  return (
    <choose-box class="flicker-in-2">
      <h1 className="choose-text">CHOOSE</h1>
      <h2 className="number-text">
        ANY <br />
        NUMBER
      </h2>
      <p className="or-text">OR</p>
      <h2 className="color-text">
        ANY <br />
        COLOR
      </h2>
      <p className="or-text">OR</p>
      <h2 className="odd-or-even-text">
        ODD<span className="or-text">OR</span>
        <br />
        EVEN
      </h2>
      <Arrow />
    </choose-box>
  );
}
