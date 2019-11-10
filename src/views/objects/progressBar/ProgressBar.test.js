import React from "react";
import { shallow } from "enzyme";
import ProgressBar from ".";

it("Renders <ProgressBar /> without crashing", () => {
  shallow(<ProgressBar />);
});
