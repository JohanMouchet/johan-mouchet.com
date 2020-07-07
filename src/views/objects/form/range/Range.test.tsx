import React from "react";
import { shallow } from "enzyme";
import Range from ".";

it("Renders <Range /> without crashing", () => {
  expect(shallow(<Range name="name" />)).toMatchSnapshot();
});
