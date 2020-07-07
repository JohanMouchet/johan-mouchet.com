import React from "react";
import { shallow } from "enzyme";
import Skills from ".";

it("Renders <Experience /> without crashing", () => {
  expect(
    shallow(
      <Skills
        skills={[
          {
            label: "Label",
            filling: 50,
            progress: "Progress",
          },
        ]}
      />
    )
  ).toMatchSnapshot();
});
