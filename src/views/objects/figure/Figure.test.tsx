import React from "react";
import { shallow } from "enzyme";
import Figure from ".";

it("Renders <Figure /> without crashing", () => {
  expect(shallow(<Figure />)).toMatchSnapshot();
});
