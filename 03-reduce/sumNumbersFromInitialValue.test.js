import { sumNumbersFromInitialValue } from "./sumNumbersFromInitialValue";

describe("sumNumbersFromInitialValue", () => {
  test("should return the sum of all numbers in the array", () => {
    // arrange
    const NUMBERS = [1, 2, 3, 4, 5];
    const expected = 15;
    // act
    const result = sumNumbersFromInitialValue(NUMBERS, 0);
    // assert
    expect(result).toEqual(expected);
  });
});

describe("sumNumbersFromInitialValue", () => {
  test("should return the sum of all numbers in the array plus initial value", () => {
    // arrange
    const NUMBERS = [1, 2, 3, 4, 5];
    const expected = 25;
    // act
    const result = sumNumbersFromInitialValue(NUMBERS, 10);
    // assert
    expect(result).toEqual(expected);
  });
});
