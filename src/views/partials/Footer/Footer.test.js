import React from "react";
import { shallow } from "enzyme";
import Footer from ".";

it("Renders <Footer /> without crashing", () => {
  expect(shallow(<Footer />)).toMatchSnapshot();
});
