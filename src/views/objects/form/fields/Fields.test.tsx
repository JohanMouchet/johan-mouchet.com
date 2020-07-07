import React from "react";
import { shallow } from "enzyme";
import { Field, Select, Textarea } from ".";

it("Renders <Field /> without crashing", () => {
  expect(
    shallow(<Field type="text" name="name" value="Value" />)
  ).toMatchSnapshot();
});

it("Renders <Select /> without crashing", () => {
  expect(
    shallow(
      <Select
        name="name"
        options={[
          {
            text: "Option 1",
            value: "Option 1",
          },
        ]}
      />
    )
  ).toMatchSnapshot();
});

it("Renders <Textarea /> without crashing", () => {
  expect(shallow(<Textarea name="name">children</Textarea>)).toMatchSnapshot();
});
