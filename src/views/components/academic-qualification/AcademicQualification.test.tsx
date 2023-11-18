import { render } from "@testing-library/react";
import { AcademicQualification } from "./AcademicQualification";

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
