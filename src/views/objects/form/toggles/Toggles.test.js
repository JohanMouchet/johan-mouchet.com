import React from "react";
import { shallow } from "enzyme";
import { Checkbox, Radio } from ".";

it("Renders <Checkbox /> without crashing", () => {
  shallow(<Checkbox />);
});

it("Renders <Radio /> without crashing", () => {
  shallow(<Radio />);
});
