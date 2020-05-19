import React from "react";
import { shallow } from "enzyme";
import Experiences from ".";

it("Renders <Experiences /> without crashing", () => {
  expect(shallow(<Experiences />)).toMatchSnapshot();
});
