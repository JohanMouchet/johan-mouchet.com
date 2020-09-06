import React from "react";
import { render } from "@testing-library/react";
import Skills from ".";

it("Renders <Experience /> without crashing", () => {
  expect(
    render(
      <Skills
        skills={[
          {
            label: "Label",
            filling: 50,
            progress: "Progress",
          },
        ]}
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
