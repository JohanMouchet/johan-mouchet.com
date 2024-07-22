import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Skills } from "./Skills";

it("Renders <Experience /> without crashing", () => {
  expect(
    render(
      <Skills
        skills={[
          {
            label: "Label",
          },
        ]}
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
