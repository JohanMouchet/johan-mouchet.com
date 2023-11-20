import { render } from "@testing-library/react";
import { ExperienceDuration } from "./ExperienceDuration";

it("Renders <ExperienceDuration /> without crashing", () => {
  expect(
    render(
      <ExperienceDuration
        experiences={[
          {
            startDate: new Date("2018-01-01"),
            endDate: new Date("2019-01-01"),
          },
        ]}
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
