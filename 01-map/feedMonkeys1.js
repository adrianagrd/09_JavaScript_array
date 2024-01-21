/**
 * Given 'MONKEYS' array, define function 'feedMonkeys' to return an array where each monkey has one fruit
 * use for() instruction
 *
 * expected: with 🍌 => ['🐒 🍌', '🦍 🍌', '🦧 🍌']
 * expected: with 🍎 => ['🐒 🍎', '🦍 🍎', '🦧 🍎']
 */

const MONKEYS = ["🐒", "🦍", "🦧"];

export const feedMonkeys = (fruit) => {
  const mapmonkeys = MONKEYS.map((monkey) => {
    return `${monkey} ${fruit}`;
  });

  return mapmonkeys;
};
