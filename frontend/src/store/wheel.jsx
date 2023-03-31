import tokenContract from "../contracts/roulette.json";
import { ethers } from "ethers";
import {
  prepareWriteContract,
  writeContract,
  waitForTransaction,
} from "@wagmi/core";

export const wheel = (set, get) => ({
  result: null,
  spinned: false, // bolean telling if wheel has been spinned
  isSpinning: false, // boolean telling if wheel is spinning

  loadingContract: { status: false, message: "" },

  setResult: (result) =>
    set((state) => ({
      ...state,
      wheel: {
        ...state.wheel,
        result,
      },
    })),

  setSpinned: (spinned) =>
    set((state) => ({
      ...state,
      wheel: {
        ...state.wheel,
        spinned,
      },
    })),

  setIsSpinning: (isSpinning) =>
    set((state) => ({
      ...state,
      wheel: {
        ...state.wheel,
        isSpinning,
      },
    })),

  setLoadingContract: (loadingContract) =>
    set((state) => ({
      ...state,
      wheel: {
        ...state.wheel,
        loadingContract,
      },
    })),

  writeContract: async () => {
    const { selection } = get().grid;
    const { setLoadingContract } = get().wheel;
    const { contractAddress } = get();

    const config = await prepareWriteContract({
      abi: tokenContract,
      address: contractAddress,
      functionName: selection?.contractFunction, //call function based on selection
      args: [selection.value],
      overrides: {
        value: ethers.utils.parseEther("0.1"),
      },
    });

    setLoadingContract({ status: true, message: "see Wallet" });

    const { hash } = await writeContract(config);

    setLoadingContract({
      status: true,
      message: "Waiting for confirmation",
    });

    const { data } = await waitForTransaction({
      hash,
      confirmations: 1,
    });

    setLoadingContract({ status: false, message: "Complete!" });
  },
});
