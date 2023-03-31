import { useEffect } from "react";

import ChooseBox from "./ChooseBox";
import ResultsBox from "./ResultsBox";
import useStore from "/src/store";

export default function InfoModule(props) {
  const spinned = useStore((state) => state.wheel.spinned);
  useEffect(() => {
    setTimeout(function () {
      let randomChooseEles = document.querySelectorAll("info-module > * > *");
      let randomChooseEle =
        randomChooseEles[Math.floor(Math.random() * randomChooseEles.length)];
      randomChooseEle.classList.add("flicker-animation2");
    }, 300);
  }, []);

  if (spinned) {
    return (
      <info-module>
        <ResultsBox resultBanner={props.resultBanner} />
      </info-module>
    );
  } else {
    return (
      <info-module>
        <ChooseBox />
      </info-module>
    );
  }
}
