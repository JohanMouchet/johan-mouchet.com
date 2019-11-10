import React from "react";
import { shallow } from "enzyme";
import Accordion from ".";

it("Renders <Accordion /> without crashing", () => {
  shallow(<Accordion />);
});
