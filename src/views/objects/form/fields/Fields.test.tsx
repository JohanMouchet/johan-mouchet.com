import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Field, Select, Textarea } from "./Fields";

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
            children: "Option 1",
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
