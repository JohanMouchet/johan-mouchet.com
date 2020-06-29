import React from "react";
import { shallow } from "enzyme";
import Default from ".";

it("Renders <Default /> without crashing", () => {
  expect(shallow(<Default />)).toMatchSnapshot();
});
