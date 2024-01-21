import { extractVipsNames } from "./extractVipsNames";

describe("extractVipsNames", () => {
  test("should return an array of strings with vips names", () => {
    // Arrange
    const VIPS = [
      {
        name: "Foo",
        age: 80,
      },
      {
        name: "Bar",
        age: 2,
      },
      {
        name: "Fizz",
        age: 5,
      },
      {
        name: "Buzz",
        age: 16,
      },
      {
        name: "FizzBuzz",
        age: 100,
      },
    ];
    const expected = ["Foo", "Bar", "Fizz", "Buzz", "FizzBuzz"];
    // Act
    const result = extractVipsNames(VIPS);
    // Assert
    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });
});
