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
            link: {
              url: "#",
            },
            lede: [
              {
                type: "paragraph",
                text: "Lede",
                spans: [],
              },
            ],
            thumbnailSrc: {
              url: "https://via.placeholder.com/400x225",
            },
            achievements: [
              {
                type: "paragraph",
                text: "<li>Achievement</li>",
                spans: [],
              },
            ],
            architecture: [
              {
                type: "paragraph",
                text: "Architecture",
                spans: [],
              },
            ],
            libraries: [
              {
                type: "paragraph",
                text: "Library",
                spans: [],
              },
            ],
          },
        ]}
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
