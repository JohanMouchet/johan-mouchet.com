import React from "react";
import { shallow } from "enzyme";
import Loader from ".";

it("Renders <Loader /> without crashing", () => {
  expect(shallow(<Loader size="sm" />)).toMatchSnapshot();
});
