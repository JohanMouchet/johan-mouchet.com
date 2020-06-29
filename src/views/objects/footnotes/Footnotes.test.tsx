import React from "react";
import { shallow } from "enzyme";
import { FootnotesReference, FootnotesNotes } from ".";

it("Renders <FootnotesReference /> without crashing", () => {
  expect(shallow(<FootnotesReference />)).toMatchSnapshot();
});

it("Renders <FootnotesNotes /> without crashing", () => {
  expect(shallow(<FootnotesNotes />)).toMatchSnapshot();
});
