import React from "react";
import { shallow } from "enzyme";
import Detail from ".";

it("Renders <Detail /> without crashing", () => {
  expect(shallow(<Detail />)).toMatchSnapshot();
});
