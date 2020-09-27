import React from "react";
import { render } from "@testing-library/react";
import { Elements } from "prismic-reactjs";
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
                type: Elements.paragraph,
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
