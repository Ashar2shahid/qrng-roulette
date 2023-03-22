import useStore from "/src/store";

export default function Numbers(props) {
  const numbers = useStore((state) => state.grid.numbers);
  const setNumbers = useStore((state) => state.grid.setNumbers);
  const setUserSelection = useStore((state) => state.grid.setUserSelection);

  function toggleChecked(number, event) {
    event.target.checked
      ? setUserSelection(event.target.value)
      : setUserSelection("");

    const updatedNums = numbers.map((num) => {
      num.checked = false;
      if (num.number == number) {
        num.checked = event.target.checked;
      }
      return num;
    });
    setNumbers(updatedNums);
  }

  return (
    <ul className="numbers">
      {numbers.map((num) => {
        if (num.number != 0) {
          return (
            <li key={`numKey-${num.number}`}>
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
              <label htmlFor={`num-${num.number}`} className={num.color}>
                <span>{num.number}</span>
              </label>
            </li>
          );
        }
      })}
    </ul>
  );
}
