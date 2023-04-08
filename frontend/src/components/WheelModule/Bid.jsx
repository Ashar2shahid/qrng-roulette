import { useState } from "react";

import useStore from "/src/store";
import { useRef } from "react";

export default function Bid() {
  const [textEdit, setTextEdit] = useState(false);
  const inputRef = useRef(null);

  const { ticket, setTicket } = useStore((state) => state.grid);

  function minusTicket() {
    if (ticket > 1) setTicket(ticket - 1);
  }

  function plusTicket() {
    setTicket(ticket + 1);
  }

  return (
    <>
      <bid-input class={`${textEdit ? "hide" : ""}`}>
        <button className="minus" onClick={minusTicket}>
          -
        </button>
        <p
          onClick={() => {
            setTextEdit(true);
            setTimeout(() => {
              inputRef.current.focus();
              inputRef.current.select();
            }, 10);
          }}
        >
          {ticket}
          <sub>{(0.001 * ticket).toFixed(3)}Ξ</sub>
        </p>
        <button className="plus" onClick={plusTicket}>
          +
        </button>
      </bid-input>

      <bid-input class={`${!textEdit ? "hide" : ""}`}>
        <input
          type="number"
          min="1"
          ref={inputRef}
          value={ticket}
          onChange={(event) => setTicket(Number(event.target.value))}
          onBlur={() => setTextEdit(false)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setTextEdit(false);
            }
          }}
        />
      </bid-input>
    </>
  );
}
