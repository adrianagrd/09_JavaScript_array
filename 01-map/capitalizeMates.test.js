import { capitalizeMates } from "./capitalizeMates";

describe("Given the capitalizeMates function", () => {
  test("when it receives MATES array, it should return an array of strings with capitalized names", () => {
    // Arrange
    const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];
    const expected = ["John", "Jacob", "Jingleheimer", "Schmidt"];

    // Act
    const result = capitalizeMates(MATES);

    // Assert
    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });
});
