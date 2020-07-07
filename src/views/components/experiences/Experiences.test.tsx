import React from "react";
import { shallow } from "enzyme";
import Experiences from ".";

it("Renders <Experiences /> without crashing", () => {
  expect(
    shallow(
      <Experiences
        experiences={[
          {
            company: {
              url: "#",
              name: "Name",
            },
            location: "Location",
            jobTitle: "Job Title",
            startDate: new Date(),
            endDate: new Date(),
            lede: "Lede",
            projects: [],
          },
        ]}
      />
    )
  ).toMatchSnapshot();
});
