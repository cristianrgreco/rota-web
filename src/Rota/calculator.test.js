import { calculateTotalRotaEntryHours } from "../calculator";

describe("calculator", () => {
  it("should return the total hours in a rota entry", () => {
    const rotaEntry = {
      schedule: [
        {
          am: { start: null, end: null },
          pm: { start: 5, end: 10 }
        },
        {
          am: { start: 10, end: 15 },
          pm: { start: null, end: null }
        }
      ]
    };
    expect(calculateTotalRotaEntryHours(rotaEntry)).toBe(10);
  });
});
