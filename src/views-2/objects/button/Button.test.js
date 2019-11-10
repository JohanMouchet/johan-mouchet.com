import React from "react";
import { shallow } from "enzyme";
import Button from ".";

it("Renders <Button /> without crashing", () => {
  shallow(<Button />);
});
