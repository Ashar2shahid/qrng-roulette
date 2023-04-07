const numArr = Array.from(Array(37).keys());
const blueNums = [
  3, 32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12,
];

export const grid = (set, get) => ({
  ticket: 1,

  numbers: numArr.map((num) => {
    const record = {
      number: num,
      checked: false,
      color: blueNums.includes(num + 1) ? "blue" : "red",
    };
    if (record.number == 0) {
      record.color = "white";
    }
    return record;
  }),

  setNumbers: (numbers) =>
    set((state) => ({
      ...state,
      grid: {
        ...state.grid,
        numbers,
      },
    })),

  setSelection: (selection) =>
    set((state) => ({
      ...state,
      grid: {
        ...state.grid,
        selection,
      },
    })),

  setTicket: (ticket) =>
    set((state) => ({
      ...state,
      grid: {
        ...state.grid,
        ticket,
      },
    })),
});
