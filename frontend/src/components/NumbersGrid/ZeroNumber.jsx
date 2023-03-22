import { useEffect, useState } from "react";

export default function ZeroNumber(props) {
  function toggleChecked(number, event) {
    event.target.checked
      ? props.setUserSelection(event.target.value)
      : props.setUserSelection("");

    const updatedNums = props.nums.map((num) => {
      num.checked = false;
      if (num.number == number) {
        num.checked = event.target.checked;
      }
      return num;
    });
    props.setNums(updatedNums);
  }
  return (
    <>
      {props.nums.map((num) => {
        if (num.number == 0) {
          return (
            <zero-number key={`numKey-${num.number}`}>
              <input
                type="checkbox"
                name="numbers"
                id={`num-${num.number}`}
                className="num"
                value={num.number}
                checked={num.checked}
                onChange={(event) => {
                  toggleChecked(num.number, event);
                }}
              />
              <label htmlFor="num-0">
                <span> Z E R 0 </span>
              </label>
            </zero-number>
          );
        }
      })}
    </>
  );
}
