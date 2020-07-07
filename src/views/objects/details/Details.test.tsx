import React from "react";
import { shallow } from "enzyme";
import Details from ".";

it("Renders <Details /> without crashing", () => {
  expect(
    shallow(
      <Details summary="Summary" variant="compact">
        children
      </Details>
    )
  ).toMatchSnapshot();
});
