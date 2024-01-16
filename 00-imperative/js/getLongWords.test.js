import { getLongWords } from "./getLongWords";

describe("getLongWords", () => {
  test.only("when LANGUAGES given", () => {
    //arrange
    const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
    const expected = ["JavaScript", "TypeScript"];

    //act
    const longWords = getLongWords(LANGUAGES);

    //assert
    expect(longWords).toBeDefined();
    expect(longWords).toEqual(expected);
  });
});

describe("getLongWords", () => {
  test("when BEATLES given", () => {
    //arrange
    const BEATLES = ["John", "George", "Paul", "Ringo"];
    const expected = ["George", "Ringo"];

    //act
    const longWords = getLongWords(BEATLES);

    //assert
    expect(longWords).toBeDefined();
    expect(longWords).toEqual(expected);
  });
});
