import React from "react";
import { shallow } from "enzyme";
import Card from ".";

it("Renders <Card /> without crashing", () => {
  expect(
    shallow(
      <Card
        bannerUrl="https://via.placeholder.com/400x168"
        bannerGradient
        header="Header"
        footer="Footer"
        variant="secondary"
        size="sm"
      >
        children
      </Card>
    )
  ).toMatchSnapshot();
});
