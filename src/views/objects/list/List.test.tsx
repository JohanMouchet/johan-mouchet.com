import React from "react";
import { shallow } from "enzyme";
import List from ".";

it("Renders <List /> without crashing", () => {
  expect(shallow(<List />)).toMatchSnapshot();
});
