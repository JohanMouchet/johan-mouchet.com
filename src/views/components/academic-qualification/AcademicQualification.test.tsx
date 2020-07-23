import React from "react";
import { shallow } from "enzyme";
import AcademicQualification from ".";

it("Renders <AcademicQualification /> without crashing", () => {
  expect(
    shallow(
      <AcademicQualification
        degrees={[
          {
            establishment: {
              name: "Name",
              url: "#",
            },
            location: "Location",
            graduationYear: new Date().getFullYear(),
            title: "Title",
          },
        ]}
      />
    )
  ).toMatchSnapshot();
});
