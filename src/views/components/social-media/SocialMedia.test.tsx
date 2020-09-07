import React from "react";
import { render } from "@testing-library/react";
import SocialMedia from ".";

it("Renders <SocialMedia /> without crashing", () => {
  expect(
    render(
      <SocialMedia
        media={[
          {
            name: "Name",
            url: "#",
            icon: <div />,
          },
        ]}
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
