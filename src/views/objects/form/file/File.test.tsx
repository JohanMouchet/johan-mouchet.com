import React from "react";
import { shallow } from "enzyme";
import File from ".";

it("Renders <File /> without crashing", () => {
  expect(
    shallow(
      <File name="name" multipleCaption="Multiple Caption" label="">
        Choose file
      </File>
    )
  ).toMatchSnapshot();
});
