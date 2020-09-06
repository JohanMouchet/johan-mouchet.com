import React from "react";
import { render } from "@testing-library/react";
import Experiences from ".";

it("Renders <Experiences /> without crashing", () => {
  expect(
    render(
      <Experiences
        experiences={[
          {
            company: {
              url: "#",
              name: "Name",
            },
            location: "Location",
            jobTitle: "Job Title",
            startDate: new Date("2018-01-01"),
            endDate: new Date("2019-01-01"),
            lede: "Lede",
            projects: [],
          },
        ]}
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
