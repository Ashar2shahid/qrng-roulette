import { useState } from "react";

export default function Thirds(props) {
  const nbsp = "\u00A0";

  const [thirds, setThirds] = useState([
    {
      category: "thirds",
      value: 12,
      name: "first",
      checked: false,
      id: "first-12",
    },
    {
      category: "thirds",
      value: 24,
      name: "second",
      checked: false,
      id: "second-24",
    },
    {
      category: "thirds",
      value: 36,
      name: "third",
      checked: false,
      id: "third-36",
    },
  ]);

  function toggleNums() {
    const found = thirds.find((third) => third.checked);

    const updatedNums = props.nums.map((num) => {
      num.checked = false;

      if (found && num.number > found.value - 12 && num.number <= found.value) {
        num.checked = found.checked;
      }

      return num;
    });
    props.setNums(updatedNums);
  }

  function checkHandler(name, event) {
    const updatedThirds = thirds.map((third) => {
      third.checked = false;
      if (name == third.name) {
        third.checked = event.target.checked;
        props.setUserSelection(third.name + " third");
      }
      return third;
    });
    setThirds(updatedThirds);
    toggleNums();
  }

  const checked = props.nums.filter((num) => num.checked);
  if (checked.length < 12 || checked.length > 12) {
    thirds.map((third) => (third.checked = false));
  }

  return (
    <ul className="chunks thirds-chunk">
      {thirds.map((third) => (
        <li key={`third${third.value}`}>
          <input
            className={third.category}
            type="checkbox"
            name="thirds"
            id={third.id}
            value={third.name + "12"}
            checked={third.checked}
            onChange={(event) => {
              checkHandler(third.name, event);
            }}
          />
          <label htmlFor={third.id}>
            <span>
              {third.name}
              {nbsp}third
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
}
