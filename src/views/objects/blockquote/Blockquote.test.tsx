import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Blockquote } from "./Blockquote";

it("Renders <Blockquote /> without crashing", () => {
  expect(
    render(<Blockquote quote="Quote" cite="Cite" pulled />).container.firstChild
  ).toMatchSnapshot();
});
