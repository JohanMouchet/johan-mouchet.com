import React from "react";
import { shallow } from "enzyme";
import Experience from ".";

it("Renders <Experience /> without crashing", () => {
  expect(shallow(<Experience />)).toMatchSnapshot();
});
