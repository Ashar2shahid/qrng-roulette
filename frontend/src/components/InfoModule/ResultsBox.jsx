import useStore from "/src/store";

export default function ResultsBox() {
  const { numbers, setNumbers, selection, ticket } = useStore(
    (state) => state.grid
  );
  const { setSpinned, isWinner } = useStore((state) => state.wheel);

  let winnings = (ticket * selection?.multiplier).toFixed(3);

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
          <span className="win-lose">YOU BET</span>
          <h2 className="color-text">
            {ticket}
            <span className="or-text">⨯ {selection?.multiplier ?? 0}</span>
          </h2>

          <h3 className="color-text">
            <span className="or-text">YOU GET</span> {isWinner ? winnings : 0}
          </h3>
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
