import React from "react";
import { shallow } from "enzyme";
import AcademicQualification from ".";

it("Renders <AcademicQualification /> without crashing", () => {
  expect(shallow(<AcademicQualification />)).toMatchSnapshot();
});
