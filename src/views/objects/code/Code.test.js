import React from "react";
import { shallow } from "enzyme";
import Code from ".";

it("Renders <Code /> without crashing", () => {
  shallow(<Code />);
});
