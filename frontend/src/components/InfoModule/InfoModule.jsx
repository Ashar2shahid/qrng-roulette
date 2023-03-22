import ChooseBox from "./ChooseBox";
import ResultsBox from "./ResultsBox";
import useStore from "/src/store";

export default function InfoModule(props) {
  const spinned = useStore((state) => state.wheel.spinned);

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
