import React from "react";
import { shallow } from "enzyme";
import Anchor from ".";

it("Renders <Anchor /> without crashing", () => {
  expect(
    shallow(
      <h2>
        <Anchor id="id" marker="#" />
        Text
      </h2>
    )
  ).toMatchSnapshot();
});
