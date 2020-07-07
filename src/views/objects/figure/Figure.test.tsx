import React from "react";
import { shallow } from "enzyme";
import Figure from ".";

it("Renders <Figure /> without crashing", () => {
  expect(
    shallow(
      <Figure
        src="https://via.placeholder.com/500x250"
        alt="Alt"
        title="Title"
        caption="Caption"
        centered
      />
    )
  ).toMatchSnapshot();
});
