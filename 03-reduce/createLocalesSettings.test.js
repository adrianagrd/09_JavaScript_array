import { createLocalesSettings } from "./createLocalesSettings";

describe("createLocalesSettings", () => {
  test("returns an object with locales settings", () => {
    // Arrange
    const LOCALES = ["EN", "FR", "GR", "IT", "PT"];
    const expected = {
      EN: { id: 0, enabled: true },
      FR: { id: 1, enabled: false },
      GR: { id: 2, enabled: false },
      IT: { id: 3, enabled: false },
      PT: { id: 4, enabled: false },
    };
    // Act
    const result = createLocalesSettings(LOCALES);
    // Assert
    expect(result).toEqual(expected);
  });
});
