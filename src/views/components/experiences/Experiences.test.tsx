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
            startDate: new Date("2019-01-01"),
            endDate: new Date("2017-01-01"),
            lede: "Lede",
            projects: [],
          },
        ]}
      />
    )
  ).toMatchSnapshot();
});
