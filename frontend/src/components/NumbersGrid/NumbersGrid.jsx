import { useState } from "react";
import ZeroNumber from "./ZeroNumber";
import Numbers from "./Numbers";
import Halves from "./Halves";
import Thirds from "./Thirds";

export default function NumbersGrid(props) {
  const nbsp = "\u00A0";

  return (
    <numbers-grid>
      <ZeroNumber
        nums={props.nums}
        setNums={props.setNums}
        setUserSelection={props.setUserSelection}
      />
      <Numbers
        nums={props.nums}
        setNums={props.setNums}
        setUserSelection={props.setUserSelection}
      />
      <Halves
        nums={props.nums}
        setNums={props.setNums}
        setUserSelection={props.setUserSelection}
      />
      <Thirds
        nums={props.nums}
        setNums={props.setNums}
        setUserSelection={props.setUserSelection}
      />
    </numbers-grid>
  );
}
