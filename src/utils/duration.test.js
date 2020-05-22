import duration from "./duration";

it("Returns year", () =>
  expect(duration(new Date("0000-01-01"), new Date("0001-01-01"))).toBe(
    "1 yr"
  ));

it("Returns month", () =>
  expect(duration(new Date("0000-01-01"), new Date("0000-02-01"))).toBe(
    "1 mo"
  ));

it("Returns year and month", () =>
  expect(duration(new Date("0000-01-01"), new Date("0001-02-01"))).toBe(
    "1 yr 1 mo"
  ));

it("Returns minimum's label", () =>
  expect(duration(new Date(), new Date(), "minimum label")).toBe(
    "minimum label"
  ));

it("Throws an exception if startDate is posterior to endDate", () =>
  expect(() =>
    duration(new Date("0001-01-01"), new Date("0000-01-01"))
  ).toThrow());
