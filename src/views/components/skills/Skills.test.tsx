import { render } from "@testing-library/react";
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
