import { useState } from "react";
import useStore from "/src/store";

export default function Halves(props) {
  const nbsp = "\u00A0";
  const { numbers, setNumbers, setSelection } = useStore((state) => state.grid);

  const [halves, setHalves] = useState([
    {
      class: "halves count",
      value: 18,
      category: "numeric-half",
      checked: false,
      id: "first-18",
      label: "First Half",
    },
    {
      class: "halves evenOdd",
      value: 0, //== % 2 == even
      category: "evenOdd",
      checked: false,
      id: "even",
      label: "Even",
    },
    {
      class: "halves color",
      value: "red",
      category: "color",
      checked: false,
      id: "red",
      label: "Red",
    },
    {
      class: "halves color",
      value: "blue",
      category: "color",
      checked: false,
      id: "blue",
      label: "Blue",
    },
    {
      class: "halves evenOdd",
      value: 1, //== %2 == odd
      category: "evenOdd",
      checked: false,
      id: "odd",
      label: "Odd",
    },
    {
      class: "halves count",
      value: 36,
      category: "numeric-half",
      checked: false,
      id: "second-36",
      label: "Second Half",
    },
  ]);

  function toggleChecked() {
    props.blink.play();
    const found = halves.find((half) => half.checked);

    const updatedNums = numbers.map((num) => {
      num.checked = false;

      if (!found) {
        return num;
      }

      //check for numeric half
      if (
        found.category == "numeric-half" &&
        num.number > found.value - 18 &&
        num.number <= found.value
      ) {
        num.checked = found.checked;
        setSelection({
          multiplier: 2,

          value: found.value / 18, //1 or 2 for contract
          type: "half",
          contractFunction: "betHalf",
        });
      }

      //check for color
      if (found.category == "color" && num.color == found.value) {
        num.checked = found.checked;
        setSelection({
          multiplier: 2,

          value: found.value === "blue", //isBlack boolean for contract
          type: "color",
          contractFunction: "betColor",
        });
      }

      //check for odd or even
      if (
        found.category == "evenOdd" &&
        num.number > 0 &&
        num.number % 2 == found.value
      ) {
        num.checked = found.checked;
        setSelection({
          multiplier: 2,

          value: found.value === 0, //isEven boolean for contract
          type: "evenOdd",
          contractFunction: "betEvenOdd",
        });
      }

      return num;
    });

    setNumbers(updatedNums);
  }

  function checkHandler(value, event) {
    const updatedHalves = halves.map((half) => {
      half.checked = false;
      if (value == half.value) {
        half.checked = event.target.checked;
      }
      return half;
    });
    setHalves(updatedHalves);
    toggleChecked();
  }

  const checked = numbers.filter((num) => num.checked);
  if (checked.length < 18) {
    halves.map((half) => (half.checked = false));
  }

  return (
    <ul className="chunks halves-chunk">
      {halves.map((half) => (
        <li key={`half${half.id}`}>
          <input
            className={half.class}
            type="checkbox"
            category="halves"
            id={half.id}
            value={half.category + "12"}
            checked={half.checked}
            onChange={(event) => {
              checkHandler(half.value, event);
            }}
          />
          <label htmlFor={half.id}>
            <span>{half.label}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}
