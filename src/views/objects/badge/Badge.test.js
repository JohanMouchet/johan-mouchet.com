import React from "react";
import { shallow } from "enzyme";
import Badge from "./";

it("Renders <Badge /> without crashing", () => {
  shallow(<Badge>+1</Badge>);
});
