import React from "react";
import { shallow } from "enzyme";
import Article from ".";

it("Renders <Article /> without crashing", () => {
  expect(
    shallow(
      <Article size="sm" margin="no-margin" variant="secondary">
        children
      </Article>
    )
  ).toMatchSnapshot();
});
