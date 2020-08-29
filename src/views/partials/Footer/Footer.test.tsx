import React from "react";
import { render } from "@testing-library/react";
import Footer from ".";

it("Renders <Footer /> without crashing", () => {
  expect(
    render(
      <Footer
        version="Version"
        copyright="Copyright"
        topButtonLabel="Top Button Label"
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
