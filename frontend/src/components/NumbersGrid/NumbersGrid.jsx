import ZeroNumber from "./ZeroNumber";
import Numbers from "./Numbers";
import Halves from "./Halves";
import Thirds from "./Thirds";

export default function NumbersGrid(props) {
  const nbsp = "\u00A0";

  return (
    <numbers-grid>
      <ZeroNumber />
      <Numbers />
      <Halves />
      <Thirds />
    </numbers-grid>
  );
}
