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
  isWinner: false, // boolean telling if the result is a winner

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

  setIsWinner: (isWinner) =>
    set((state) => ({
      ...state,
      wheel: {
        ...state.wheel,
        isWinner,
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
    const { selection, numbers } = get().grid;
    const {
      setLoadingContract,
      setIsSpinning,
      setResult,
      setSpinned,
      setIsWinner,
    } = get().wheel;
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

    const { hash } = await writeContract(config);

    setIsSpinning(true);

    const data = await waitForTransaction({
      hash,
      confirmations: 1,
    });

    const log = data.logs.find((log) => log.address === contractAddress);
    const parsedLog = roulette.interface.parseLog(log);
    const logRequestId = parsedLog.args.requestId;

    const unwatch = watchContractEvent(
      {
        address: contractAddress,
        abi: tokenContract,
        eventName: "SpinComplete",
      },

      (requestId, spinId, randomNumber) => {
        if (requestId === logRequestId) {
          unwatch();
          const result = ethers.BigNumber.from(randomNumber.mod(37)).toNumber();

          setIsSpinning(false);
          setSpinned(true);
          setResult(result);

          //check if result is a winner, considering all selection types, onethird, onehalf, color, oddeven, number
          switch (selection.type) {
            case "number":
              setIsWinner(result === selection.value);
              break;
            case "color":
              setIsWinner(
                (numbers[result].color === "blue") === selection.value
              );
              break;
            case "evenOdd":
              setIsWinner((result % 2 === 0) === selection.value);
              break;
            case "third":
              setIsWinner(Math.floor(result / 12) === selection.value);
              break;
            case "half":
              setIsWinner(Math.floor(result / 18) === selection.value);
              break;
            default:
              break;
          }
        }
      }
    );
  },
});
