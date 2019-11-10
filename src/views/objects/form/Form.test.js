import React from "react";
import { shallow } from "enzyme";
import Form from ".";

it("Renders <Form /> without crashing", () => {
  shallow(<Form />);
});
