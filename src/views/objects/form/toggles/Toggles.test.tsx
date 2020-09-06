import React from "react";
import { render } from "@testing-library/react";
import { Checkbox, Radio } from ".";

it("Renders <Checkbox /> without crashing", () => {
  expect(
    render(
      <Checkbox name="name" value="value" checked>
        children
      </Checkbox>
    ).container.firstChild
  ).toMatchSnapshot();
});

it("Renders <Radio /> without crashing", () => {
  expect(
    render(
      <Radio name="name" value="value" checked>
        children
      </Radio>
    ).container.firstChild
  ).toMatchSnapshot();
});
