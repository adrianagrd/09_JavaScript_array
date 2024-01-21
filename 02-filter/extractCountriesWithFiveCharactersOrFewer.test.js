import { extractCountriesWithFiveCharactersOrFewer } from "./extractCountriesWithFiveCharactersOrFewer";

describe("extractCountriesWithFiveCharactersOrFewer", () => {
  test("returns an array of countries with five characters or fewer", () => {
    // Arrange
    const COUNTRIES = [
      "United Kingdom",
      "Italy",
      "France",
      "Portugal",
      "Greece",
    ];
    const expected = ["Italy"];

    // Act
    const result = extractCountriesWithFiveCharactersOrFewer(COUNTRIES);

    // Assert
    expect(result).toEqual(expected);
  });
});
