import useStore from "/src/store";

export default function ResultsBox(props) {
  const numbers = useStore((state) => state.grid.numbers);
  const setNumbers = useStore((state) => state.grid.setNumbers);
  const setSpinned = useStore((state) => state.wheel.setSpinned);

  function resetRoulette() {
    setSpinned(false);
    setNumbers(
      numbers.map((num) => {
        num.checked = false;
        return num;
      })
    );

    //reset slice class
    var selectedSlices = document.querySelectorAll(".selected");
    selectedSlices.forEach(function (slice) {
      slice.classList.remove("selected");
    });
  }

  return (
    <results-box class="flicker-in-2">
      <h1
        className="congrats-text"
        dangerouslySetInnerHTML={{ __html: props.resultBanner }}
      />
      <button className="play-again" onClick={resetRoulette}>
        PLAY
        <br />
        AGAIN
      </button>
    </results-box>
  );
}
