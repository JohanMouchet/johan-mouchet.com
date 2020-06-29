import React from "react";
import { shallow } from "enzyme";
import Aside from ".";

it("Renders <Aside /> without crashing", () => {
  expect(shallow(<Aside />)).toMatchSnapshot();
});
