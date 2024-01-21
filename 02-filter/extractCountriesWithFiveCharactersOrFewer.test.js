import { extractCountriesWithFiveCharactersOrFewer } from "./extractCountriesWithFiveCharactersOrFewer";

describe("extractCountriesWithFiveCharactersOrFewer", () => {
  test("returns an array of countries with five characters or fewer", () => {
    const COUNTRIES = [
      "United Kingdom",
      "Italy",
      "France",
      "Portugal",
      "Greece",
    ];
    const expected = ["Italy"];
    const actual = extractCountriesWithFiveCharactersOrFewer(COUNTRIES);
    expect(actual).toEqual(expected);
  });
});
