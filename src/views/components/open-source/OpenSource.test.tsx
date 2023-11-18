import { Element } from "@prismicio/react";
import { render } from "@testing-library/react";
import { OpenSource } from "./OpenSource";

it("Renders <OpenSource /> without crashing", () => {
  expect(
    render(
      <OpenSource
        projects={[
          {
            link: {
              url: "#",
            },
            name: "Name",
            lede: [
              {
                type: Element.paragraph,
                text: "Lede",
                spans: [],
              },
            ],
            description: [
              {
                type: Element.preformatted,
                text: "<ul><li>Description</li></ul>",
                spans: [],
              },
            ],
          },
        ]}
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
