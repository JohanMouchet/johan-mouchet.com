import { duration } from "./duration";

it("Returns year", () =>
  expect(
    duration([{ start: new Date("0000-01-01"), end: new Date("0001-01-01") }])
  ).toBe("1 yr"));

it("Returns month", () =>
  expect(
    duration([{ start: new Date("0000-01-01"), end: new Date("0000-02-01") }])
  ).toBe("1 mo"));

it("Returns year and month", () =>
  expect(
    duration([{ start: new Date("0000-01-01"), end: new Date("0001-02-01") }])
  ).toBe("1 yr 1 mo"));

it("Returns year in iso8601 format", () =>
  expect(
    duration(
      [{ start: new Date("0000-01-01"), end: new Date("0001-01-01") }],
      "iso8601"
    )
  ).toBe("P1Y"));

it("Returns month in iso8601 format", () =>
  expect(
    duration(
      [{ start: new Date("0000-01-01"), end: new Date("0000-02-01") }],
      "iso8601"
    )
  ).toBe("P1M"));

it("Returns year and month in iso8601 format", () =>
  expect(
    duration(
      [{ start: new Date("0000-01-01"), end: new Date("0001-02-01") }],
      "iso8601"
    )
  ).toBe("P1Y1M"));

it.only("Returns minimum's label", () =>
  expect(
    duration(
      [{ start: new Date("0000-01-01"), end: new Date("0000-01-01") }],
      "short",
      "minimum label"
    )
  ).toBe("minimum label"));

it("Returns cumulated years and months", () =>
  expect(
    duration(
      [
        { start: new Date("0000-01-01"), end: new Date("0001-01-01") },
        { start: new Date("0001-01-01"), end: new Date("0002-01-01") },
      ],
      "short"
    )
  ).toBe("2 yrs"));
