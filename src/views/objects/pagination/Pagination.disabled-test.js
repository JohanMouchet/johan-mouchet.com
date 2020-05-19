import React from "react";
import { shallow } from "enzyme";
import Pagination from ".";

it("Renders <Pagination /> without crashing", () => {
  expect(shallow(<Pagination />)).toMatchSnapshot();
});
