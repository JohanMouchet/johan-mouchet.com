import React from "react";
import { shallow } from "enzyme";
import Badge from ".";

it("Badge renders without crashing", () => {
  shallow(<Badge>+1</Badge>);
});
