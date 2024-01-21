import { getLongWords } from "./getLongWords";

describe("getLongWords", () => {
  test("returns the longest word with length equal or greather than 5", () => {
    // Arrange
    const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
    const expected = ["JavaScript", "TypeScript"];
    // Act
    const result = getLongWords(LANGUAGES);
    // Assert
    expect(result).toEqual(expected);
  });
});

describe("getLongWords", () => {
  test("returns the longest word with length equal or greather than 5", () => {
    // Arrange
    const BEATLES = ["John", "George", "Paul", "Ringo"];
    const expected = ["George", "Ringo"];
    // Act
    const actual = getLongWords(BEATLES);
    // Assert
    expect(actual).toEqual(expected);
  });
});
