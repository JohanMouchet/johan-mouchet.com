import React from "react";
import { shallow } from "enzyme";
import { Fieldset, FormGroup, Label } from ".";

it("Renders <Fieldset /> without crashing", () => {
  expect(
    shallow(<Fieldset legend="legend">children</Fieldset>)
  ).toMatchSnapshot();
});

it("Renders <FormGroup /> without crashing", () => {
  expect(
    shallow(
      <FormGroup variant="success" detail="Detail">
        children
      </FormGroup>
    )
  ).toMatchSnapshot();
});

it("Renders <Label /> without crashing", () => {
  expect(shallow(<Label block>Label</Label>)).toMatchSnapshot();
});
