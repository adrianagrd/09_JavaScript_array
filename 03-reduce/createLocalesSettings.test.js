import { createLocalesSettings } from "./createLocalesSettings";

describe("createLocalesSettings", () => {
  test("returns an object with locales settings", () => {
    // Arrange
    const LOCALES = ["EN", "GR", "FR", "IT", "PT"];
    const expected = {
      EN: { id: 0, enabled: true },
      US: { id: 1, enabled: false },
      EN: { id: 2, enabled: false },
      EN: { id: 3, enabled: false },
      EN: { id: 4, enabled: false },
    };
    // Act
    const result = createLocalesSettings(LOCALES);
    // Assert
    expect(result).toEqual(expected);
  });
});
