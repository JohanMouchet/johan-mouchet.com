import React from "react";
import { shallow } from "enzyme";
import Breadcrumb from ".";

it("Renders <Breadcrumb /> without crashing", () => {
  shallow(<Breadcrumb />);
});
