import { customersWhoBelongToMembership } from "./customersWhoBelongToMembership.js";

describe("customersWhoBelongToMembership", () => {
  test("returns an array with customers who belong to the club", () => {
    // Arrange
    const CUSTOMERS = [
      {
        name: "Foo",
        member: true,
      },
      {
        name: "Bar",
        member: false,
      },
      {
        name: "Fizz",
        member: true,
      },
      {
        name: "Buzz",
        member: false,
      },
      {
        name: "FizzBuzz",
        member: true,
      },
    ];
    const expected = [
      { name: "Foo", member: true },
      { name: "Fizz", member: true },
      { name: "FizzBuzz", member: true },
    ];
    // Act
    const result = customersWhoBelongToMembership(CUSTOMERS);
    // Assert()
    expect(result).toEqual(expected);
  });
});
