import React from "react";
import { shallow } from "enzyme";
import Menu from ".";

it("Renders <Menu /> without crashing", () => {
  shallow(<Menu />);
});
