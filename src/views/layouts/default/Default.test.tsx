import React from "react";
import { render } from "@testing-library/react";
import Default from ".";

it("Renders <Default /> without crashing", () => {
  expect(
    render(<Default>children</Default>).container.firstChild
  ).toMatchSnapshot();
});
