import { formatPhone } from "./formatter";

describe("formatter", () => {
  it("should format phone numbers", () => {
    const phone = "07950933374";
    expect(formatPhone(phone)).toBe("+44 7950 933374");
  });
});
