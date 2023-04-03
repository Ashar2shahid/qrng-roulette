import useStore from "/src/store";

export default function ResultsBox() {
  const { numbers, setNumbers, selection } = useStore((state) => state.grid);
  const { setSpinned, isWinner } = useStore((state) => state.wheel);

  function resetRoulette() {
    setNumbers(
      numbers.map((num) => {
        num.checked = false;
        return num;
      })
    );

    //reset slice class
    let selectedSlices = document.querySelectorAll(".selected");
    selectedSlices.forEach(function (slice) {
      slice.classList.remove("selected");
    });

    setSpinned(false);
  }

  return (
    <results-box class="flicker-in-2">
      <div className="congrats-text">
        <h1>{isWinner ? "CONGRATS" : "TRY AGAIN"}</h1>
        <div>
          <span class="win-lose">{isWinner ? "YOU WIN" : "YOU LOSE"}</span>
          <p>
            0.001 X {selection.multiplier} = {selection.multiplier * 10} MATIC
          </p>
        </div>
      </div>
      <button className="play-again" onClick={resetRoulette}>
        PLAY
        <br />
        AGAIN
      </button>
    </results-box>
  );
}
