import { formatSchedulePeriod } from "./formatter";

describe("formatter", () => {
  it("should format a schedule period", () => {
    const period = { start: 4, end: 8 };
    expect(formatSchedulePeriod(period)).toBe("4-8");
  });

  it("should format a schedule period in 12 hour time", () => {
    const period = { start: 16, end: 20 };
    expect(formatSchedulePeriod(period)).toBe("4-8");
  });

  it("should return an empty string for an empty period", () => {
    const period = { start: null, end: null };
    expect(formatSchedulePeriod(period)).toBe("");
  });
});
