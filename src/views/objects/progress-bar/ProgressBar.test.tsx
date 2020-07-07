import React from "react";
import { shallow } from "enzyme";
import ProgressBar from ".";

it("Renders <ProgressBar /> without crashing", () => {
  expect(
    shallow(
      <ProgressBar
        label="Label"
        progress="Progress"
        progressPct={false}
        total="Total"
        detailsOnHover
        filling={50}
      />
    )
  ).toMatchSnapshot();
});
