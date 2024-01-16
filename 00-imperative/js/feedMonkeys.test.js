import { feedMonkeys } from "./feedMonkeys";

describe("feedMonkeys", () => {
  test("when 🍌", () => {
    //arrange
    const fruit = "🍌";
    const expected = ["🐒 🍌", "🦍 🍌", "🦧 🍌"];

    //act
    const monkeys = feedMonkeys(fruit);

    //assertx
    expect(monkeys).toBeDefined();
    expect(monkeys).toEqual(["🐒 🍌", "🦍 🍌", "🦧 🍌"]);
  });
});

describe("feedMonkeys", () => {
  test("when 🍎", () => {
    //arrange
    const fruit = "🍎";
    const expected = ["🐒 🍎", "🦍 🍎", "🦧 🍎"];

    //act
    const monkeys = feedMonkeys(fruit);

    //assertx
    expect(monkeys).toBeDefined();
    expect(monkeys).toEqual(expected);
  });
});
