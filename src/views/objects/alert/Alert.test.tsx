import React from "react";
import { shallow } from "enzyme";
import Alert from ".";

it("Renders <Alert /> without crashing", () => {
  expect(
    shallow(
      <Alert isOpen closable variant="info" position="fixed-bottom">
        children
      </Alert>
    )
  ).toMatchSnapshot();
});
