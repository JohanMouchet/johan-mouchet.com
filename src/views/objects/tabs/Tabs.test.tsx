import React from "react";
import { shallow } from "enzyme";
import Tabs from ".";

it("Renders <Tabs /> without crashing", () => {
  expect(
    shallow(
      <Tabs
        tabs={[
          {
            thumb: "Thumb",
            panel: "Panel",
          },
        ]}
      />
    )
  ).toMatchSnapshot();
});