import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Badge } from "./Badge";

it("Renders <Badge /> without crashing", () => {
  expect(
    render(<Badge>children</Badge>).container.firstChild
  ).toMatchSnapshot();
});
