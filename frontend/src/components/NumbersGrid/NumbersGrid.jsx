import ZeroNumber from "./ZeroNumber";
import Numbers from "./Numbers";
import Halves from "./Halves";
import Thirds from "./Thirds";
import useStore from "/src/store";
import howler from "howler";

export default function NumbersGrid() {
  const { spinned, isSpinning } = useStore((state) => state.wheel);
  const blink = new howler.Howl({
    src: ["/src/assets/sounds/blink.wav"],
    volume: 0.1,
  });

  return (
    <numbers-grid class={isSpinning || spinned ? "pointer-events-none" : ""}>
      <ZeroNumber blink={blink} />
      <Numbers blink={blink} />
      <Halves blink={blink} />
      <Thirds blink={blink} />
    </numbers-grid>
  );
}
