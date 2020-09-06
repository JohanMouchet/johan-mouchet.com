import React from "react";
import { render } from "@testing-library/react";
import Tabs from ".";

it("Renders <Tabs /> without crashing", () => {
  expect(
    render(
      <Tabs
        tabs={[
          {
            thumb: "Thumb",
            panel: "Panel",
          },
        ]}
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
