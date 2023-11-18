import { render } from "@testing-library/react";
import { Default } from "./Default";

it("Renders <Default /> without crashing", () => {
  expect(
    render(<Default>children</Default>).container.firstChild
  ).toMatchSnapshot();
});
