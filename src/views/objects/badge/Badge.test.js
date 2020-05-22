import React from "react";
import { shallow } from "enzyme";
import Badge from "./";

it("Renders <Badge /> without crashing", () => {
  expect(shallow(<Badge>+1</Badge>)).toMatchSnapshot();
});
