import { useState } from "react";

export default function Halves(props) {
  const nbsp = "\u00A0";

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
      class: "halves oddEven",
      value: 0, //== % 2 == even
      category: "oddEven",
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
      class: "halves oddEven",
      value: 1, //== %2 == odd
      category: "oddEven",
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

  function toggleNums() {
    const found = halves.find((half) => half.checked);

    const updatedNums = props.nums.map((num) => {
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
      }

      //check for color
      if (found.category == "color" && num.color == found.value) {
        num.checked = found.checked;
      }

      //check for odd or even
      if (
        found.category == "oddEven" &&
        num.number > 0 &&
        num.number % 2 == found.value
      ) {
        num.checked = found.checked;
      }

      return num;
    });

    props.setNums(updatedNums);
  }

  function checkHandler(value, event) {
    const updatedHalves = halves.map((half) => {
      half.checked = false;
      if (value == half.value) {
        half.checked = event.target.checked;
        props.setUserSelection(half.value + " half");
      }
      return half;
    });
    setHalves(updatedHalves);
    toggleNums();
  }

  const checked = props.nums.filter((num) => num.checked);
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
