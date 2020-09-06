import React from "react";
import { render } from "@testing-library/react";
import Aside from ".";

it("Renders <Aside /> without crashing", () => {
  expect(
    render(<Aside margin="no-margin">children</Aside>).container.firstChild
  ).toMatchSnapshot();
});
