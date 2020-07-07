import React from "react";
import { shallow } from "enzyme";
import { FootnotesReference, FootnotesNotes } from ".";

it("Renders <FootnotesReference /> without crashing", () => {
  expect(
    shallow(<FootnotesReference id="id-1" text="1" label="" />)
  ).toMatchSnapshot();
});

it("Renders <FootnotesNotes /> without crashing", () => {
  expect(
    shallow(
      <FootnotesNotes
        notes={[
          {
            id: "id-1",
            text: "Note",
            label: "",
          },
        ]}
      />
    )
  ).toMatchSnapshot();
});
