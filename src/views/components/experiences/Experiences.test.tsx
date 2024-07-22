import { Element } from "@prismicio/react";
import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Experiences } from "./Experiences";

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
            roles: {
              roles: [
                {
                  title: "Job Title",
                  startDate: "2018-01-01",
                  present: false,
                  endDate: "2019-01-01",
                  contractType: "Full-time",
                },
              ],
            },
            lede: [
              {
                type: Element.paragraph,
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
