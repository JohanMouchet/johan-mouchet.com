import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Alert } from "./Alert";

it("Renders <Alert /> without crashing", () => {
  expect(
    render(
      <Alert isOpen closable variant="info" position="fixed-bottom">
        children
      </Alert>
    ).container.firstChild
  ).toMatchSnapshot();
});
