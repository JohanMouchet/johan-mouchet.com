import React from "react";
import { shallow } from "enzyme";
import SocialMedia from ".";

it("Renders <SocialMedia /> without crashing", () => {
  expect(
    shallow(
      <SocialMedia
        medias={[
          {
            name: "Name",
            url: "#",
            icon: <div />,
          },
        ]}
      />
    )
  ).toMatchSnapshot();
});
