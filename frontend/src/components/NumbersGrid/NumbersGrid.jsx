import ZeroNumber from "./ZeroNumber";
import Numbers from "./Numbers";
import Halves from "./Halves";
import Thirds from "./Thirds";
import useStore from "/src/store";

export default function NumbersGrid() {
  const { spinned, isSpinning } = useStore((state) => state.wheel);
  return (
    <numbers-grid class={isSpinning || spinned ? "pointer-events-none" : ""}>
      <ZeroNumber />
      <Numbers />
      <Halves />
      <Thirds />
    </numbers-grid>
  );
}
