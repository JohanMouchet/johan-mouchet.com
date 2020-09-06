import React from "react";
import { render } from "@testing-library/react";
import Badge from "./";

it("Renders <Badge /> without crashing", () => {
  expect(
    render(<Badge>children</Badge>).container.firstChild
  ).toMatchSnapshot();
});
