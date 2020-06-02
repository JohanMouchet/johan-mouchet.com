import React from "views/partials/Footer/node_modules/react";
import { shallow } from "views/partials/Footer/node_modules/enzyme";
import Footer from ".";

it("Renders <Footer /> without crashing", () => {
  expect(shallow(<Footer />)).toMatchSnapshot();
});
