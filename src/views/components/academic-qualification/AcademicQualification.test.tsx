import React from "react";
import { render } from "@testing-library/react";
import AcademicQualification from ".";

it("Renders <AcademicQualification /> without crashing", () => {
  expect(
    render(
      <AcademicQualification
        degrees={[
          {
            establishmentName: "Name",
            establishmentLink: {
              url: "#",
            },
            location: "Location",
            graduationYear: new Date().getFullYear(),
            title: "Title",
          },
        ]}
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
