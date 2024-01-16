import { sumNumbersFromInitialValue } from "./sumNumbersFromInitialValue";

describe("sumNumbersFromInitialValue", () => {
  test("when NUMBERS given", () => {
    //arrange
    const NUMBERS = [1, 2, 3, 4, 5];
    const expected = 15;

    //act
    const sum = sumNumbersFromInitialValue(0);

    //assert
    expect(sum).toBeDefined();
    expect(sum).toEqual(expected);
  });
});

describe("sumNumbersFromInitialValue", () => {
  test("when NUMBERS given", () => {
    //arrange
    const NUMBERS = [1, 2, 3, 4, 5];
    const expected = 25;

    //act
    const sum = sumNumbersFromInitialValue(10);

    //assert
    expect(sum).toBeDefined();
    expect(sum).toEqual(expected);
  });
});
