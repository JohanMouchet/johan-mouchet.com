import React from "react";
import { shallow } from "enzyme";
import PersonalWorks from ".";

it("Renders <PersonalWorks /> without crashing", () => {
  expect(shallow(<PersonalWorks />)).toMatchSnapshot();
});
