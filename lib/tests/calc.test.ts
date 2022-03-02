import Calc from "../utils/Calc";

describe("Testing Calc utils", () => {
  test("Testing add(1, 2), expected 3 ", () => {
    expect(Calc.add(1, 2)).toBe(3);
  });

  test("Testing sub(5, 2), expected 3", () => {
    expect(Calc.sub(5, 2)).toBe(3);
  });
});
