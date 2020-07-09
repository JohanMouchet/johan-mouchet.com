import React from "react";
import { shallow } from "enzyme";
import List from ".";

it("Renders <List /> without crashing", () => {
  expect(
    shallow(
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
    )
  ).toMatchSnapshot();
});
