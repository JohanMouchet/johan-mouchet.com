import React from "react";
import { shallow } from "enzyme";
import { Field, Select, Textarea } from ".";

it("Renders <Field /> without crashing", () => {
  shallow(<Field />);
});

it("Renders <Select /> without crashing", () => {
  shallow(<Select />);
});

it("Renders <Textarea /> without crashing", () => {
  shallow(<Textarea />);
});
