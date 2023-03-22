import Arrow from "./Arrow";

export default function ChooseBox() {
  return (
    <choose-box class="flicker-in-2">
      <h1 className="choose-text">CHOOSE</h1>
      <h2 className="number-text">
        ANY <br />
        NUMBER
      </h2>
      <p className="or-text">OR</p>
      <h2 className="color-text">
        ANY <br />
        COLOR
      </h2>
      <p className="or-text">OR</p>
      <h2 className="odd-or-even-text">
        ODD<span className="or-text">OR</span>
        <br />
        EVEN
      </h2>
      <Arrow />
    </choose-box>
  );
}
