import React from "react";
import { render } from "@testing-library/react";
import List from ".";

it("Renders <List /> without crashing", () => {
  expect(
    render(
      <List
        as="ul"
        unstyled={false}
        inline={false}
        striped="horizontal"
        size="lg"
        linkBlock={false}
      >
        <li></li>
      </List>
    ).container.firstChild
  ).toMatchSnapshot();
});
