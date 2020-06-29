import React from "react";
import { shallow } from "enzyme";
import Main from ".";

it("Renders <Main /> without crashing", () => {
  expect(shallow(<Main />)).toMatchSnapshot();
});
