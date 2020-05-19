import React from "react";
import { shallow } from "enzyme";
import Projects from ".";

it("Renders <Projects /> without crashing", () => {
  expect(shallow(<Projects />)).toMatchSnapshot();
});
