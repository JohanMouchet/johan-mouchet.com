import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Article } from "./Article";

it("Renders <Article /> without crashing", () => {
  expect(
    render(
      <Article size="sm" margin="no-margin" variant="secondary">
        children
      </Article>
    ).container.firstChild
  ).toMatchSnapshot();
});
