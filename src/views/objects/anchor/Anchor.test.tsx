import React from "react";
import { render } from "@testing-library/react";
import Anchor from ".";

it("Renders <Anchor /> without crashing", () => {
  expect(
    render(
      <Anchor as="h2" id="id" marker="#">
        children
      </Anchor>
    ).container.firstChild
  ).toMatchSnapshot();
});
