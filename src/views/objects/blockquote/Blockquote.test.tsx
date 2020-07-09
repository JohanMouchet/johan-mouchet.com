import React from "react";
import { shallow } from "enzyme";
import Blockquote from ".";

it("Renders <Blockquote /> without crashing", () => {
  expect(
    shallow(<Blockquote quote="Quote" cite="Cite" pulled />)
  ).toMatchSnapshot();
});
