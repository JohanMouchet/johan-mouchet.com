import React from "react";
import { shallow } from "enzyme";
import Anchor from ".";

it("Renders <Anchor /> without crashing", () => {
  shallow(<Anchor />);
});
