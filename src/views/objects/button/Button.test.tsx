import React from "react";
import { render } from "@testing-library/react";
import Button from ".";

it("Renders <Button /> without crashing", () => {
  expect(
    render(
      <Button type="anchor" url="#" variant="primary" size="sm" block="@sm">
        children
      </Button>
    ).container.firstChild
  ).toMatchSnapshot();
});
