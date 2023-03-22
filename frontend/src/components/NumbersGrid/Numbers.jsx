export default function Numbers(props) {
  function maxLimit() {
    const checked = props.nums.filter((num) => num.checked);
    return checked.length < 1;
  }
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
    <ul className="numbers">
      {props.nums.map((num) => {
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
