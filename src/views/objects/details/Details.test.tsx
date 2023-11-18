import { render } from "@testing-library/react";
import { Details } from "./Details";

it("Renders <Details /> without crashing", () => {
  expect(
    render(
      <Details summary="Summary" variant="compact">
        children
      </Details>
    ).container.firstChild
  ).toMatchSnapshot();
});
