import React from "react";
import { render } from "@testing-library/react";
import { Elements } from "prismic-reactjs";
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
                type: Elements.paragraph,
                text: "Lede",
                spans: [],
              },
            ],
            thumbnailSrc: {
              url: "https://via.placeholder.com/400x225",
            },
            achievements: [
              {
                type: Elements.preformatted,
                text: "<li>Achievement</li>",
                spans: [],
              },
            ],
            architecture: [
              {
                type: Elements.paragraph,
                text: "Architecture",
                spans: [],
              },
            ],
            libraries: [
              {
                type: Elements.paragraph,
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
