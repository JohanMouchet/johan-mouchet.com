import { render } from "@testing-library/react";
import { Button } from "./Button";

it("Renders <Button /> without crashing", () => {
  expect(
    render(
      <Button type="anchor" url="#" variant="primary" size="sm" block="sm">
        children
      </Button>
    ).container.firstChild
  ).toMatchSnapshot();
});
