import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { grid } from "./grid";
import { spin } from "./wheel";

const useStore = create(
  devtools((set, get) => ({
    spin: spin(set, get),
    grid: grid(set, get),

    errors: [],
    setErrors: (errors) => set({ errors: errors }),
  }))
);

export default useStore;
