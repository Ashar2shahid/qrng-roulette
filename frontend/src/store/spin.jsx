import tokenContract from "../contracts/lottery.json";
import { ethers } from "ethers";
import {
  prepareWriteContract,
  writeContract,
  waitForTransaction,
} from "@wagmi/core";

export const spin = (set, get) => ({
  result: null,
  loadingContract: { status: false, message: "" },

  setResult: (result) =>
    set((state) => ({
      ...state,
      result: {
        ...state.result,
        result,
      },
    })),

  writeContract: async () => {
    const { selected } = get().numbers;

    const config = await prepareWriteContract({
      abi: tokenContract,
      // address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      functionName: "betNumber",
      args: [selected],
      overrides: {
        value: ethers.utils.parseEther("0.1"),
      },
    });

    set((state) => ({
      ...state,
      spin: {
        ...state.spin,
        loadingContract: { status: true, message: "see Wallet" },
      },
    }));

    const { hash } = await writeContract(config);

    set((state) => ({
      ...state,
      spin: {
        ...state.spin,
        loadingContract: { status: true, message: "Waiting for Confirmaiton" },
      },
    }));

    const { data } = await waitForTransaction({
      hash,
      confirmations: 1,
    });

    set((state) => ({
      ...state,
      spin: {
        ...state.spin,
        loadingContract: { status: false, message: "Completed!" },
      },
    }));
  },
});
