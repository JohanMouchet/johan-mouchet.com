import React from "react";
import { shallow } from "enzyme";
import MastAside from ".";

it("Renders < MastAside /> without crashing", () => {
  shallow(<MastAside />);
});
