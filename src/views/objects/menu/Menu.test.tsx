import React from "react";
import { render } from "@testing-library/react";
import Menu from ".";

it("Renders <Menu /> without crashing", () => {
  expect(
    render(
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
    ).container.firstChild
  ).toMatchSnapshot();
});
