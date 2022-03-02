import Text from "../utils/Text";

describe("Testing Text utils", () => {
  test("Testing toLowerCase('Hello World'), expected 'hello world' ", () => {
    expect(Text.toLowerCase("Hello World")).toBe("hello world");
  });

  test("Testing toUpperCase('Hello World'), expected 'HELLO WORLD'", () => {
    expect(Text.toUpperCase("Hello World")).toBe("HELLO WORLD");
  });
});
