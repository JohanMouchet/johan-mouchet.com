import React from "react";
import { shallow } from "enzyme";
import Menu from ".";

it("Renders <Menu /> without crashing", () => {
  expect(
    shallow(
      <Menu
        menu={[
          {
            text: "Menu",
            menu: [
              {
                text: "Submenu",
                url: "#",
              },
            ],
          },
        ]}
      />
    )
  ).toMatchSnapshot();
});
