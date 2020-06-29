import React from "react";
import { shallow } from "enzyme";
import Article from ".";

it("Renders <Article /> without crashing", () => {
  expect(shallow(<Article />)).toMatchSnapshot();
});
