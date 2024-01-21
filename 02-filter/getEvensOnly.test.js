import { getEvensOnly } from "./getEvensOnly";

describe("getEvensOnly function", () => {
  test("it should return an array with only even numbers", () => {
    // Arrange
    const COUNTERS = [2, 25, 43, 12, 67, 42, 28];
    const expected = [2, 12, 42, 28];
    // Act
    const result = getEvensOnly(COUNTERS);
    // Assert
    expect(result).toEqual(expected);
  });
});
