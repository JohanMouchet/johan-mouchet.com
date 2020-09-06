import React from "react";
import { render } from "@testing-library/react";
import Projects from ".";

it("Renders <Projects /> without crashing", () => {
  expect(
    render(
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
    ).container.firstChild
  ).toMatchSnapshot();
});
