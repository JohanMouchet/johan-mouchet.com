import React from "react";
import { shallow } from "enzyme";
import Projects from ".";

it("Renders <Projects /> without crashing", () => {
  expect(
    shallow(
      <Projects
        projects={[
          {
            highlight: true,
            name: "Name",
            tagline: "Tagline",
            url: "#",
            lede: "Lede",
            thumbnailSrc: "https://via.placeholder.com/400x225",
            achievements: ["Achievement"],
            architecture: ["Architecture"],
            libraries: ["Librarie"],
          },
        ]}
      />
    )
  ).toMatchSnapshot();
});
