import React from "react";
import { render } from "@testing-library/react";
import Loader from ".";

it("Renders <Loader /> without crashing", () => {
  expect(render(<Loader size="sm" />).container.firstChild).toMatchSnapshot();
});
