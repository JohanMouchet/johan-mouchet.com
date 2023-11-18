import { render } from "@testing-library/react";
import { Figure } from "./Figure";

it("Renders <Figure /> without crashing", () => {
  expect(
    render(
      <Figure
        src="https://via.placeholder.com/500x250"
        alt="Alt"
        title="Title"
        caption="Caption"
        centered
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
