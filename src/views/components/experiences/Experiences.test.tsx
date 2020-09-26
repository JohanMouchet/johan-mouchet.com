import React from "react";
import { render } from "@testing-library/react";
import Experiences from ".";

it("Renders <Experiences /> without crashing", () => {
  expect(
    render(
      <Experiences
        experiences={[
          {
            companyLink: {
              url: "#",
            },
            companyName: "Name",
            location: "Location",
            jobTitle: "Job Title",
            startDate: new Date("2018-01-01"),
            present: false,
            endDate: new Date("2019-01-01"),
            contractType: "Contract Type",
            lede: [
              {
                type: "paragraph",
                text: "Lede",
                spans: [],
              },
            ],
            projects: { projects: [] },
          },
        ]}
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
