import React from "react";
import { render } from "@testing-library/react";
import { FootnotesReference, FootnotesNotes } from ".";

it("Renders <FootnotesReference /> without crashing", () => {
  expect(
    render(<FootnotesReference id="id-1" text="1" label="" />).container
      .firstChild
  ).toMatchSnapshot();
});

it("Renders <FootnotesNotes /> without crashing", () => {
  expect(
    render(
      <FootnotesNotes
        notes={[
          {
            id: "id-1",
            text: "Note",
            label: "",
          },
        ]}
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
