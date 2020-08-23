import React from "react";
import { render } from "@testing-library/react";
import Blockquote from ".";

it("Renders <Blockquote /> without crashing", () => {
  expect(
    render(<Blockquote quote="Quote" cite="Cite" pulled />).container.firstChild
  ).toMatchSnapshot();
});
