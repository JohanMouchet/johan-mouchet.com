import React from "react";
import { shallow } from "enzyme";
import PersonalWorks from ".";

it("Renders <PersonalWorks /> without crashing", () => {
  expect(
    shallow(
      <PersonalWorks
        works={[
          {
            url: "#",
            thumbnailSrc: "https://via.placeholder.com/200x200",
            sourceIcon: <div />,
          },
        ]}
      />
    )
  ).toMatchSnapshot();
});
