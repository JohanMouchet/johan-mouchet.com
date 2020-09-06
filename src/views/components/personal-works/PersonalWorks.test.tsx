import React from "react";
import { render } from "@testing-library/react";
import PersonalWorks from ".";

it("Renders <PersonalWorks /> without crashing", () => {
  expect(
    render(
      <PersonalWorks
        works={[
          {
            url: "#",
            thumbnailSrc: "https://via.placeholder.com/200x200",
            sourceIcon: <div />,
          },
        ]}
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
