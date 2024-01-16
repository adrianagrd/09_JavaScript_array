/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array only with strings with length equal or greater then 5
 * use for() instruction
 *
 * expected LANGUAGES: ['JavaScript', 'TypeScript']
 * expected BEATLES: ["George", "Ringo"];
 */

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];

export const getLongWords = (collection) => {
  const words = [];
  const collectionlength = collection.length;

  for (let index = 0; index < collectionlength; index++) {
    const word = collection[index];
    if (word.length >= 5) {
      words.push(word);
    }
  }

  return words;
};
