import React from "react";
import { render } from "@testing-library/react";
import Tooltip from ".";

it("Renders <Tooltip /> without crashing", () => {
  expect(
    render(
      <Tooltip content="Content" position="top" indicator multiLines={false}>
        children
      </Tooltip>
    ).container.firstChild
  ).toMatchSnapshot();
});
