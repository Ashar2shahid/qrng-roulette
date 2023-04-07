import { useState } from "react";

import useStore from "/src/store";

export default function Bid() {
  const { ticket, setTicket } = useStore((state) => state.grid);

  return (
    <bid-input>
      <button className="minus" onClick={() => setTicket(ticket - 1)}>
        -
      </button>
      <p>{ticket}</p>
      <button className="plus" onClick={() => setTicket(ticket + 1)}>
        +
      </button>
    </bid-input>
  );
}
