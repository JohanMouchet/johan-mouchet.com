import React from "react";
import { render } from "@testing-library/react";
import Alert from ".";

it("Renders <Alert /> without crashing", () => {
  expect(
    render(
      <Alert isOpen closable variant="info" position="fixed-bottom">
        children
      </Alert>
    ).container.firstChild
  ).toMatchSnapshot();
});
