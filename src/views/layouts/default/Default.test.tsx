import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Default } from "./Default";

it("Renders <Default /> without crashing", () => {
  expect(
    render(<Default>children</Default>).container.firstChild
  ).toMatchSnapshot();
});
