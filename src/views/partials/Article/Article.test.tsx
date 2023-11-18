import { render } from "@testing-library/react";
import { Article } from "./Article";

it("Renders <Article /> without crashing", () => {
  expect(
    render(
      <Article size="sm" margin="no-margin" variant="secondary">
        children
      </Article>
    ).container.firstChild
  ).toMatchSnapshot();
});
