import { duration } from "./duration";

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

it("Returns year in iso8601 format", () =>
  expect(
    duration(new Date("0000-01-01"), new Date("0001-01-01"), "iso8601")
  ).toBe("P1Y"));

it("Returns month in iso8601 format", () =>
  expect(
    duration(new Date("0000-01-01"), new Date("0000-02-01"), "iso8601")
  ).toBe("P1M"));

it("Returns year and month in iso8601 format", () =>
  expect(
    duration(new Date("0000-01-01"), new Date("0001-02-01"), "iso8601")
  ).toBe("P1Y1M"));

it("Returns minimum's label", () =>
  expect(duration(new Date(), new Date(), "short", "minimum label")).toBe(
    "minimum label"
  ));

it("Throws an exception if startDate is posterior to endDate", () =>
  expect(() =>
    duration(new Date("0001-01-01"), new Date("0000-01-01"))
  ).toThrow());
