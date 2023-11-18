import { render } from "@testing-library/react";
import { Menu } from "./Menu";

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
