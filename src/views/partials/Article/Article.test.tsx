import React from "react";
import { render } from "@testing-library/react";
import Article from ".";

it("Renders <Article /> without crashing", () => {
  expect(
    render(
      <Article size="sm" margin="no-margin" variant="secondary">
        children
      </Article>
    ).container.firstChild
  ).toMatchSnapshot();
});
