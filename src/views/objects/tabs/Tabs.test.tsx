import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Tabs } from "./Tabs";

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
