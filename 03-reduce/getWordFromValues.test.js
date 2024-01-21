import { getWordFromValues } from "./getWordFromValues";

describe("getWordFromValues", () => {
  test("should return a string of all those numbers", () => {
    // arrange
    const VALUES = [1, 2, 3];
    const expected = "123";
    // act
    const result = getWordFromValues(VALUES);
    // assert
    expect(result).toEqual("123");
  });
});
