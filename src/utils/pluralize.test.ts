import pluralize from "./pluralize";

it("Doesn't pluralize if quantity is smaller or equal to 1", () =>
  expect(pluralize("bee", 1)).toBe("bee"));

it("Prefix with 's' if the quantity is greater than 1 and the word doesn't ends in 'y'", () =>
  expect(pluralize("bee", 2)).toBe("bees"));

it("Prefix with 's' if the quantity is greater than 1, the word ends in 'y' but is preceded by a vowel", () =>
  expect(pluralize("day", 2)).toBe("days"));

it("Prefix with 'ies' if the quantity is greater than 1, the word ends in 'y' but isn't preceded by a vowel", () =>
  expect(pluralize("city", 2)).toBe("cities"));
