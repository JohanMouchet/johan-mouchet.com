import React from "react";
import { shallow } from "enzyme";
import Alert from ".";

it("Renders <Alert /> without crashing", () => {
  shallow(<Alert />);
});
