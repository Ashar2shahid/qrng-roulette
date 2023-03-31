import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { grid } from "./grid";
import { wheel } from "./wheel";

const useStore = create(
  devtools((set, get) => ({
    contractAddress: "0x99c5f09F0A620C7224727B2428eF3194eA8D8521",

    wheel: wheel(set, get),
    grid: grid(set, get),

    errors: [],
    setErrors: (errors) => set({ errors: errors }),
  }))
);

export default useStore;
