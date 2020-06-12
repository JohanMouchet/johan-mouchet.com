import React from "react";
import { shallow } from "enzyme";
import { Fieldset, FormGroup, Label } from ".";

it("Renders <Fieldset /> without crashing", () => {
  expect(shallow(<Fieldset />)).toMatchSnapshot();
});

it("Renders <FormGroup /> without crashing", () => {
  expect(shallow(<FormGroup />)).toMatchSnapshot();
});

it("Renders <Label /> without crashing", () => {
  expect(shallow(<Label />)).toMatchSnapshot();
});
