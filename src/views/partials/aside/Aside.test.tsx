import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Aside } from "./Aside";

it("Renders <Aside /> without crashing", () => {
  expect(
    render(<Aside margin="no-margin">children</Aside>).container.firstChild
  ).toMatchSnapshot();
});
