/**
 * Given COUNTERS array, define function 'getEvensOnly' to return a new array that only includes the even numbers.
 *
 * expected: [ 2, 12, 42, 28 ]
 */

const COUNTERS = [2, 25, 43, 12, 67, 42, 28];

export const getEvensOnly = (counters) => {
  const filterEvens = counters.filter((counter) => {
    return counter % 2 === 0;
  });
  return filterEvens;
};
