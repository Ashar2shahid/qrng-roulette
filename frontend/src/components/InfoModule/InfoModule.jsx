import ChooseBox from "./ChooseBox";
import ResultsBox from "./ResultsBox";

export default function InfoModule(props) {
  if (props.spinned) {
    return (
      <info-module>
        <ResultsBox
          resultBanner={props.resultBanner}
          resetRoulette={props.resetRoulette}
        />
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
