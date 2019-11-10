import React from "react";
import { shallow } from "enzyme";
import Card from ".";

it("Renders <Card /> without crashing", () => {
  shallow(<Card />);
});
