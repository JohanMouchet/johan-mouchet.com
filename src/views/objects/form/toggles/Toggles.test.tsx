import React from "react";
import { shallow } from "enzyme";
import { Checkbox, Radio } from ".";

it("Renders <Checkbox /> without crashing", () => {
  expect(
    shallow(
      <Checkbox name="name" value="value" checked>
        children
      </Checkbox>
    )
  ).toMatchSnapshot();
});

it("Renders <Radio /> without crashing", () => {
  expect(
    shallow(
      <Radio name="name" value="value" checked>
        children
      </Radio>
    )
  ).toMatchSnapshot();
});
