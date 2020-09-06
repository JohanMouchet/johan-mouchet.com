import React from "react";
import { render } from "@testing-library/react";
import { Field, Select, Textarea } from ".";

it("Renders <Field /> without crashing", () => {
  expect(
    render(<Field type="text" name="name" value="Value" />).container.firstChild
  ).toMatchSnapshot();
});

it("Renders <Select /> without crashing", () => {
  expect(
    render(
      <Select
        name="name"
        options={[
          {
            text: "Option 1",
            value: "Option 1",
          },
        ]}
      />
    ).container.firstChild
  ).toMatchSnapshot();
});

it("Renders <Textarea /> without crashing", () => {
  expect(
    render(<Textarea name="name">children</Textarea>).container.firstChild
  ).toMatchSnapshot();
});
