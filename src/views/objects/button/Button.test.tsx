import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Button } from "./Button";

it("Renders <Button /> without crashing", () => {
  expect(
    render(
      <Button href="#" variant="primary" size="sm" block="sm">
        children
      </Button>
    ).container.firstChild
  ).toMatchSnapshot();
});
