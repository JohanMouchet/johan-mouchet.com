import React from "react";
import { shallow } from "enzyme";
import { FootnotesReference, FootnotesNotes } from ".";

it("Renders <FootnotesReference /> without crashing", () => {
  shallow(<FootnotesReference />);
});

it("Renders <FootnotesNotes /> without crashing", () => {
  shallow(<FootnotesNotes />);
});
