import React from "react";
import { shallow } from "enzyme";
import Header from ".";

it("Renders <Header /> without crashing", () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});
