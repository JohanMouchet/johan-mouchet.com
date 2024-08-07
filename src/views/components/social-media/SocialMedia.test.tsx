import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { SocialMedia } from "./SocialMedia";

it("Renders <SocialMedia /> without crashing", () => {
  expect(
    render(
      <SocialMedia
        media={[
          {
            name: "Name",
            link: {
              url: "#",
            },
            icon: "500px",
          },
        ]}
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
