import React from "react";
import { render } from "@testing-library/react";
import Footer from ".";

it("Renders <Footer /> without crashing", () => {
  expect(
    render(
      <Footer
        version="Version"
        copyright="Copyright"
        topButtonTitle="Top Button Title"
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
