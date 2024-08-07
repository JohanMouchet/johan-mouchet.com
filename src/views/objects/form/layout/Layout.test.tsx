import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Fieldset, FormGroup, Label } from "./Layout";

it("Renders <Fieldset /> without crashing", () => {
  expect(
    render(<Fieldset legend="legend">children</Fieldset>).container.firstChild
  ).toMatchSnapshot();
});

it("Renders <FormGroup /> without crashing", () => {
  expect(
    render(
      <FormGroup variant="success" detail="Detail">
        children
      </FormGroup>
    ).container.firstChild
  ).toMatchSnapshot();
});

it("Renders <Label /> without crashing", () => {
  expect(
    render(<Label block>Label</Label>).container.firstChild
  ).toMatchSnapshot();
});
