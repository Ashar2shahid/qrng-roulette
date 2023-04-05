import { useState } from "react";
import useStore from "/src/store";
export default function Thirds(props) {
  const nbsp = "\u00A0";

  const { numbers, setNumbers, setSelection } = useStore((state) => state.grid);

  const [thirds, setThirds] = useState([
    { value: 12, name: "first" },
    { value: 24, name: "second" },
    { value: 36, name: "third" },
  ]);

  function toggleChecked() {
    props.blink.play();

    const found = thirds.find((third) => third.checked);

    const updatedNums = numbers.map((num) => {
      num.checked = false;
      if (found && num.number > found.value - 12 && num.number <= found.value) {
        num.checked = found.checked;
      }
      return num;
    });
    setNumbers(updatedNums);
  }

  function changeHandler(name, event) {
    const updatedThirds = thirds.map((third) => {
      third.checked = false;
      if (name == third.name) {
        third.checked = event.target.checked;
        setSelection({
          value: event.target.value / 12, //contract accepts 1, 2, 3 for thirds
          type: "third",
          contractFunction: "betOneThird",
          multiplier: 3,
        });
      }
      return third;
    });
    setThirds(updatedThirds);
    toggleChecked();
  }

  const checked = numbers.filter((num) => num.checked);
  if (checked.length !== 12) {
    thirds.map((third) => (third.checked = false));
  }

  return (
    <ul className="chunks thirds-chunk">
      {thirds.map(({ value, name, checked }) => (
        <li key={`third${value}`}>
          <input
            className="thirds"
            type="checkbox"
            name="thirds"
            id={`${name}-${value}`}
            value={value}
            checked={checked}
            onChange={(event) => changeHandler(name, event)}
          />
          <label htmlFor={`${name}-${value}`}>
            <span>
              {name}
              {nbsp}third
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
}
