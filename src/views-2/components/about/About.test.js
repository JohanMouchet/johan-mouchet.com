import React from "react";
import { shallow } from "enzyme";
import About from ".";

it("Renders <About /> without crashing", () => {
  shallow(<About />);
});
