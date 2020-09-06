import React from "react";
import { render } from "@testing-library/react";
import File from ".";

it("Renders <File /> without crashing", () => {
  expect(
    render(
      <File name="name" multipleCaption="Multiple Caption" label="">
        Choose file
      </File>
    ).container.firstChild
  ).toMatchSnapshot();
});
