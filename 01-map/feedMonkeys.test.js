import { feedMonkeys } from "./feedMonkeys";

describe("given the feedmonkeys function", () => {
  test("when it receives 🍌 it should return ['🐒 🍌', '🦍 🍌', '🦧 🍌']", () => {
    // Arrange
    const fruit = "🍌";
    const expected = ["🐒 🍌", "🦍 🍌", "🦧 🍌"];

    // Act
    const result = feedMonkeys(fruit);

    // Assert
    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });
});
