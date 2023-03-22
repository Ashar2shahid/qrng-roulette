export default function ResultsBox(props) {
  return (
    <results-box class="flicker-in-2">
      <h1
        className="congrats-text"
        dangerouslySetInnerHTML={{ __html: props.resultBanner }}
      />
      <button className="play-again" onClick={props.resetRoulette}>
        PLAY
        <br />
        AGAIN
      </button>
    </results-box>
  );
}
