import tokenContract from "../contracts/roulette.json";
import { ethers } from "ethers";
import {
  prepareWriteContract,
  writeContract,
  waitForTransaction,
  getContract,
  watchContractEvent,
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
    const { setIsSpinning } = get().wheel;
    const { setResult } = get().wheel;
    const { contractAddress } = get();

    const roulette = await getContract({
      address: contractAddress,
      abi: tokenContract,
    });

    const config = await prepareWriteContract({
      abi: tokenContract,
      address: contractAddress,
      functionName: selection?.contractFunction, //call function based on selection
      args: [selection.value],
      overrides: {
        value: ethers.utils.parseEther("0.001"),
      },
    });

    setLoadingContract({ status: true, message: "see Wallet" });
    setIsSpinning(true);

    const { hash } = await writeContract(config);

    setLoadingContract({
      status: true,
      message: "Waiting for confirmation",
    });

    const data = await waitForTransaction({
      hash,
      confirmations: 1,
    });

    const log = data.logs.find((log) => log.address === contractAddress);
    const parsedLog = roulette.interface.parseLog(log);
    const logRequestId = parsedLog.args.requestId;
    console.log(logRequestId);
    console.log("waiting for random number to be generated...");

    setLoadingContract({
      status: true,
      message: "Spinning wheel...",
    });

    const unwatch = watchContractEvent(
      {
        address: contractAddress,
        abi: tokenContract,
        eventName: "SpinComplete",
      },

      (requestId, spinId, randomNumber) => {
        console.log(requestId, spinId, randomNumber);
        if (requestId === logRequestId) {
          unwatch();
          const result = ethers.BigNumber.from(randomNumber.mod(37)).toNumber();
          setResult(result);
          setLoadingContract({ status: false, message: "Complete!" });
        }
      }
    );
  },
});
