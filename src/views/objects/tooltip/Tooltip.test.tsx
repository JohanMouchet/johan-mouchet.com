import React from "react";
import { shallow } from "enzyme";
import Tooltip from ".";

it("Renders <Tooltip /> without crashing", () => {
  expect(shallow(<Tooltip />)).toMatchSnapshot();
});
