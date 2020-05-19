import React from "react";
import { shallow } from "enzyme";
import { Field, Select, Textarea } from ".";

it("Renders <Field /> without crashing", () => {
  expect(shallow(<Field />)).toMatchSnapshot();
});

it("Renders <Select /> without crashing", () => {
  expect(shallow(<Select />)).toMatchSnapshot();
});

it("Renders <Textarea /> without crashing", () => {
  expect(shallow(<Textarea />)).toMatchSnapshot();
});
