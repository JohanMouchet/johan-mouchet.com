import { Element } from "@prismicio/react";
import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Projects } from "./Projects";

it.skip("Renders <Projects /> without crashing", () => {
  expect(
    render(
      <Projects
        highlighted={true}
        projects={[
          {
            name: "Name",
            tagline: "Tagline",
            link: {
              url: "#",
            },
            lede: [
              {
                type: Element.paragraph,
                text: "Lede",
                spans: [],
              },
            ],
            thumbnailSrc: {
              url: "https://via.placeholder.com/400x225",
            },
            achievements: [
              {
                type: Element.preformatted,
                text: "<li>Achievement</li>",
                spans: [],
              },
            ],
            architecture: [
              {
                type: Element.paragraph,
                text: "Architecture",
                spans: [],
              },
            ],
          },
        ]}
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
