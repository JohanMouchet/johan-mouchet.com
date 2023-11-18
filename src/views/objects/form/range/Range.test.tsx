import { render } from "@testing-library/react";
import { Range } from "./Range";

it("Renders <Range /> without crashing", () => {
  expect(render(<Range name="name" />).container.firstChild).toMatchSnapshot();
});
