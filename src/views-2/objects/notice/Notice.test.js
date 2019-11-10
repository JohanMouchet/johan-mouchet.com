import React from "react";
import { shallow } from "enzyme";
import Notice from ".";

it("Renders <Notice /> without crashing", () => {
  shallow(<Notice />);
});
