import React from "react";
import { render } from "@testing-library/react";
import Modal from ".";

it("Renders <Modal /> without crashing", () => {
  expect(
    render(
      <Modal
        isOpen={false}
        size="sm"
        triggerLabel="Open Modal"
        closeLabel="Close Modal"
      >
        children
      </Modal>
    ).container.firstChild
  ).toMatchSnapshot();
});
