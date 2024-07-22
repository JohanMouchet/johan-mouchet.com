import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Main } from "./Main";

it("Renders <Main /> without crashing", () => {
  expect(render(<Main>children</Main>).container.firstChild).toMatchSnapshot();
});
