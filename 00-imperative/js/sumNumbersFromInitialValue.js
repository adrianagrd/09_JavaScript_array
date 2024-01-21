/**
 * Given 'NUMBERS' array, define function 'sumNumbersFromInitialValue' to return its sum value depending on initial value.
 * use for() instruction
 *
 * expected with initial as 0: 15
 * expected with initial as 10: 25
 */

const NUMBERS = [1, 2, 3, 4, 5];

export const sumNumbersFromInitialValue = (initial) => {
  let sum = initial;
  const collectionlength = NUMBERS.length;

  for (let index = 0; index < collectionlength; index++) {
    sum += NUMBERS[index];
  }
  return sum;
};
