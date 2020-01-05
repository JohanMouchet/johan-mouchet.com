import React from "react";
import { shallow } from "enzyme";
import Toggles from ".";

it("Renders <Toggles /> without crashing", () => {
  shallow(<Toggles />);
});
