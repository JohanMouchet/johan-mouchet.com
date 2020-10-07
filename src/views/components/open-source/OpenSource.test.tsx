import React from "react";
import { render } from "@testing-library/react";
import { Elements } from "prismic-reactjs";
import OpenSource from ".";

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
                type: Elements.paragraph,
                text: "Lede",
                spans: [],
              },
            ],
            description: [
              {
                type: Elements.preformatted,
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
