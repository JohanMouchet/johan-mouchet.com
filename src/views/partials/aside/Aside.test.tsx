import { render } from "@testing-library/react";
import { Aside } from "./Aside";

it("Renders <Aside /> without crashing", () => {
  expect(
    render(<Aside margin="no-margin">children</Aside>).container.firstChild
  ).toMatchSnapshot();
});
