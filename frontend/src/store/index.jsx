import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { grid } from "./grid";
import { wheel } from "./wheel";

const useStore = create(
  devtools((set, get) => ({
    wheel: wheel(set, get),
    grid: grid(set, get),

    errors: [],
    setErrors: (errors) => set({ errors: errors }),
  }))
);

export default useStore;
