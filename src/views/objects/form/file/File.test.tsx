import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { File } from "./File";

it("Renders <File /> without crashing", () => {
  expect(
    render(
      <File name="name" multipleCaption="Multiple Caption">
        Choose file
      </File>
    ).container.firstChild
  ).toMatchSnapshot();
});
