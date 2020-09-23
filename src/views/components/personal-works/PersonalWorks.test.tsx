import React from "react";
import { render } from "@testing-library/react";
import PersonalWorks from ".";

it("Renders <PersonalWorks /> without crashing", () => {
  expect(
    render(
      <PersonalWorks
        works={[
          {
            link: {
              url: "#",
            },
            thumbnailSrc: {
              url: "https://via.placeholder.com/200x200",
            },
            thumbnailExternalSrc: {
              url: "https://via.placeholder.com/200x200",
            },
            icon: "unsplash",
          },
        ]}
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
