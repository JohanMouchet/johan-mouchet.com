import React from "react";
import { shallow } from "enzyme";
import Anchor from ".";

it("Renders <Anchor /> without crashing", () => {
  expect(
    shallow(
      <Anchor as="h2" id="id" marker="#">
        children
      </Anchor>
    )
  ).toMatchSnapshot();
});
