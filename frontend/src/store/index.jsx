import { create } from "zustand";
import { devtools } from "zustand/middleware";

// import { numbers } from "./numbers";

const useStore = create(
  devtools((set, get) => ({
    count: 0,

    errors: [],
    setErrors: (errors) => set({ errors: errors }),
  }))
);

export default useStore;
