import { transformSecondsToWords } from "./transformSecondsToWords";

describe("transformSecondsToWords", () => {
  test("should return an array of strings from numbers", () => {
    // Arrange
    const SECONDS = [2, 5, 100];
    const expected = ["2", "5", "100"];
    // Act
    const result = transformSecondsToWords(SECONDS);
    // Assert
    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });
});
