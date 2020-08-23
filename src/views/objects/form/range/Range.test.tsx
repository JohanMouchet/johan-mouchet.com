import React from "react";
import { render } from "@testing-library/react";
import Range from ".";

it("Renders <Range /> without crashing", () => {
  expect(render(<Range name="name" />).container.firstChild).toMatchSnapshot();
});
