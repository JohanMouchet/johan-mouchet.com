import React from "react";
import { render } from "@testing-library/react";
import Breadcrumb from ".";

it("Renders <Breadcrumb /> without crashing", () => {
  expect(
    render(
      <Breadcrumb
        levels={[
          {
            title: "Title",
            link: {
              url: "#",
            },
          },
        ]}
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
