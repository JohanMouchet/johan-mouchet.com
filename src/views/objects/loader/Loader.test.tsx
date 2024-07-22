import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Loader } from "./Loader";

it("Renders <Loader /> without crashing", () => {
  expect(render(<Loader size="sm" />).container.firstChild).toMatchSnapshot();
});
