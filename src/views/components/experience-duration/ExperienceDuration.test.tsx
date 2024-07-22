import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { ExperienceDuration } from "./ExperienceDuration";

it("Renders <ExperienceDuration /> without crashing", () => {
  expect(
    render(
      <ExperienceDuration
        experiences={[
          {
            startDate: "2018-01-01",
            endDate: "2019-01-01",
          },
        ]}
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
