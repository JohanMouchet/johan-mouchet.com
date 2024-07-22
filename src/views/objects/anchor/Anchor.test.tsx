import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Anchor } from "./Anchor";

it("Renders <Anchor /> without crashing", () => {
  expect(
    render(
      <Anchor id="id" marker="#">
        children
      </Anchor>
    ).container.firstChild
  ).toMatchSnapshot();
});
