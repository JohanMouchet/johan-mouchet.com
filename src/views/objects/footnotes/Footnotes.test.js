import React from "react";
import { shallow } from "enzyme";
import Footnotes from ".";

it("Renders <Footnotes /> without crashing", () => {
  shallow(<Footnotes />);
});
