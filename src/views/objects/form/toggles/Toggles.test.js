import React from "react";
import { shallow } from "enzyme";
import { Checkbox, Radio } from ".";

it("Renders <Checkbox /> without crashing", () => {
  expect(shallow(<Checkbox />)).toMatchSnapshot();
});

it("Renders <Radio /> without crashing", () => {
  expect(shallow(<Radio />)).toMatchSnapshot();
});
